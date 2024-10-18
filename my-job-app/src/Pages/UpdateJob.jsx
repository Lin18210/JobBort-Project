import { useLoaderData, useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {

    const {id} = useParams();
    const {_id, jobTitle, companyName, minPrice, maxPrice, salaryType, postingDate, jobLocation, experienceLevel, companyLogo, employmentType, description, postedBy, skills} = useLoaderData()

    const [selectedOptions, setSelectedOptions] = useState(null);
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills = selectedOptions;
        fetch(`http://localhost:3000/update-job/${id}`, {
            method: "PATCH",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            if(result.acknowledged === true){
                alert("Job Updated Successfully!")
            }
            reset();
        })
      }

      const options = [
        {value: "Javascript", label: "Javascript"},
        {value: "Python", label: "Python"},
        {value: "C++", label: "C++"},
        {value: "HTML", label: "HTML"},
        {value: "CSS", label: "CSS"},
        {value: "React", label: "React"},
        {value: "Node", label: "Node"},
        {value: "MongoDB", label: "MongoDB"},
      ]


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* form */}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                {/* 1st row */}
                <div className='create-job-flex'>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Job Title</label>
                        <input type="text" placeholder="First name" defaultValue={jobTitle} {...register("jobTitle")} className='create-job-input' />
                    </div>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Company Name</label>
                        <input type="text" placeholder="Ex: Microsoft" defaultValue={companyName} {...register("companyName")} className='create-job-input' />
                    </div>
                </div>

                {/* 2nd row */}
                <div className='create-job-flex'>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Minimum Salary</label>
                        <input type="text" placeholder="$20k" defaultValue={minPrice} {...register("minPrice")} className='create-job-input' /> 
                    </div>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Maximum Salary</label>
                        <input type="text" placeholder="$120k" defaultValue={maxPrice} {...register("maxPrice")} className='create-job-input' />
                    </div>
                </div>

                {/* 3rd row */}
                <div className='create-job-flex'>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Salary Type</label>
                        <select {...register("salaryType")} className='create-job-flex'>
                            <option value={salaryType}>{salaryType}</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Job Location</label>
                        <input 
                         type="text"
                         placeholder="Ex: New York"
                         defaultValue={jobLocation}
                         {...register("jobLocation")} 
                         className='create-job-input' />
                    </div>
                </div>

                {/* 4th row */}
                <div className='create-job-flex'>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Job Posting Date</label>
                        <input type="date" placeholder="Ex: 2023-11-04" defaultValue={postingDate} {...register("postingDate")} className='create-job-input' />
                    </div>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Experience Level</label>
                        <select {...register("experienceLevel")} className='create-job-flex'>
                            <option value={experienceLevel}>{experienceLevel}</option>
                            <option value="NoExperience">No Experience</option>
                            <option value="Internship">Internship</option>
                            <option value="Work remotly">Work remotly</option>
                        </select>
                    </div>
                    
                </div>

                {/* 5th row */}
                <div>
                    <label className='block mb-2 text-lg'>Required Skill Sets</label>
                    <CreatableSelect 
                    defaultValue={skills}
                    onChange={setSelectedOptions}
                    options={options}
                    isMulti
                    className='create-job-input py-4'
                    />
                </div>

                {/* 6th row */}
                <div className='create-job-flex'>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Company Logo</label>
                        <input type="url" placeholder="Paste your company logo url: " defaultValue={companyLogo} {...register("companyLogo")} className='create-job-input' />
                    </div>
                    <div className='lg-w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Employment Type</label>
                        <select {...register("employmentType")} className='create-job-flex'>
                            <option value={employmentType}>{employmentType}</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>
                    
                </div>

                {/* 7th row */}
                <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none'
                    rows={6}
                    placeholder='Job Description'
                    defaultValue={description}
                    ></textarea>
                </div>

                {/* Last row */}
                <div>
                    <label>Job Posted By</label>
                    <input type="email" placeholder="yourEmail@gmail.com"defaultValue={postedBy} {...register("postedBy")} className='create-job-input' />
                </div>

      <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
    </form>
        </div>
    </div>
  )
}

export default UpdateJob