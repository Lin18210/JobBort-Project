import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import { useState } from 'react';
import Card from '../Components/Card';
import Jobs from './Jobs';
import Sidebar from './Sidebar/Sidebar';
import Newsletter from '../Components/Newsletter';


const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [jobs, setJobs] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3000/all-jobs")
    .then(res => res.json())
    .then(data => {setJobs(data)
    setLoading(false) 
    })
  },[])


  //handle input changes
  const [query,setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)
  }

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== - 1)

  //filter radio button
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //filter button (work for specific button)
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  // calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return{startIndex, endIndex};
  }

  // function of Next Page
  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage + 1)
    } 
  }

  // function of Previous Page
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filter input data
    if (query){
      filteredJobs = filteredItems;
    }

    //category filtering
    if(selected){
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) => 
        parseInt(maxPrice)<= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        postingDate >= selected ||
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase()
    )
    } 

    // slice the data base 1 on current page
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
  }

  const result = filteredData(jobs, selectedCategory, query)

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>
    {/*main contents*/}
      <div className='bg-[#FAFAFA] md:grid md:grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

        {/* Left Side  */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>

        {/* Job Cards */}
        <div className='col-span-2 bg-white p-4 rounded'>
          
          {
            isLoading ? <p>Loading.......</p>: result.length > 0 ? <Jobs result={result}/> : <>
            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
            <p>No Data Found</p>
            </>
          }
          
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button className='hover:underline' onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button className='hover:underline' onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>Next</button>
              </div>
            ) : ""
          }  
          </div>

        {/* Right Side */}
        <div className='bg-white p-4 rounded'><Newsletter/></div>
      </div>
    </div>
  )
}

export default Home