import React from 'react'
import InputField from '../../Components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Employment Type</h4>

      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test4' id='test4' value="" onChange={handleChange} />
            <span className='checkmark'></span>ALL
        </label>

        <InputField 
        handleChange={handleChange} 
        value="Full-Time" 
        title="Full-Time" 
        name="test4"/>
        <InputField 
        handleChange={handleChange} 
        value="Part-Time" 
        title="Part-Time" 
        name="test4"/>
        <InputField 
        handleChange={handleChange} 
        value="Temporary" 
        title="Temporary" 
        name="test4"/>
      </div>
    </div>
  )
}

export default EmploymentType