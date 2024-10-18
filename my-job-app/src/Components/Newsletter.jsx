import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg fond-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs
            </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum voluptatum modi nihil, saepe vitae sunt dolorem impedit minima fugit quos.</p>

            <div className='w-full space-y-4'>
                <input type="email" name="email" id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input 
                type="submit" 
                value={"Message"}
                onClick={() => window.open('http://localhost:5174/  ', '_blank')} 
                className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded text-white cursor-pointer'/>
            </div>
        </div>

        <div className='mt-20'>
            <h3 className='text-lg fond-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get notified Faster
            </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum voluptatum modi nihil, saepe vitae sunt dolorem impedit minima fugit quos.</p>

            <div className='w-full space-y-4'>
                <input type="email" name="email" id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded text-white cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter