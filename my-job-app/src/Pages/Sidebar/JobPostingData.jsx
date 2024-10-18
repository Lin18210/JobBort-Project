import React from 'react'
import InputField from '../../Components/InputField'

const JobPostingData = ({ handleChange }) => {

    const now = new Date();
    const twentyFourAgo = new Date(now - 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

    // convert dates to string
    const twentyFourAgoDate = twentyFourAgo.toISOString().slice(0, 10)
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10)
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10)


  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>

      <div>
      <label className='sidebar-label-container'>
            <input type="radio" name='test3' id='test3' value="" onChange={handleChange} />
            <span className='checkmark'></span>ALL
        </label>

        <InputField 
        handleChange={handleChange} 
        value={twentyFourAgoDate} 
        title="24 Hours Ago" 
        name="test3"/>

        <InputField 
        handleChange={handleChange} 
        value={sevenDaysAgoDate} 
        title="A Week Ago" 
        name="test3"/>

        <InputField 
        handleChange={handleChange} 
        value={thirtyDaysAgoDate} 
        title="A Month Ago" 
        name="test3"/> 
      </div>
    </div>
  )
}

export default JobPostingData