import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../Components/PageHeader'

const JobDetails = () => {

    const {id} = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    }, [])

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <PageHeader 
        title={
          <div>
            <div className='text-5xl'> {job.companyName} </div> <br />
            <div className='text-4xl'>{job.jobTitle}</div>
          </div>
        } 
        path={"single job"}/>
        <h3>Job Details: {id}</h3>
        <h3>JobBort Chat Name : {job.companyName}</h3> <br />

        <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button> <br /> <br />

        <h3> Salary : {job.minPrice} ~ {job.maxPrice}</h3>
        <h3> Salary Type : {job.salaryType}</h3>
        <h3> Job Location : {job.jobLocation}</h3>
        <h3> Any Experience : {job.experienceLevel}</h3>
        <h3> Employment Type : {job.employmentType}</h3>
        <h3> Posting Date: {job.postingDate}</h3> <br />

        <p>{job.description}</p>
    </div>
  )
}

export default JobDetails