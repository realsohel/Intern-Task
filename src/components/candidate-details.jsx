import React from 'react'

const CandidateDetails = () => {
    return (
    <>
        <div className='grid grid-cols-2   mt-3 space-x-12 font-medium mb-6'>

            <div className="  w-[100%] text-gray-500">
                <li className='list-none mt-3'>Status:</li>
                <li className='list-none mt-3'>Resume:</li>
                <li className='list-none mt-3'>Total Work Exp:</li>
                <li className='list-none mt-3'>Current Role:</li>
                <li className='list-none mt-3'>Current Company:</li>
                <li className='list-none mt-3'>Alma Mater:</li>
                <li className='list-none mt-3'>Evaluated On:</li>
                <li className='list-none mt-3'>Applied for:</li>
                <li className='list-none mt-3'>Contact no:</li>
                <li className='list-none mt-3'>Email:</li>
            </div>

            <div className="w-[100%] text-gray-800">
                <li className='list-none mt-3 text-blue-400 bg-blue-200 text-center'>BARRAISER EVALUATED</li>
                <li className='list-none mt-3 text-blue-400 underline  underline-offset-4 tracking-wide decoration-1 '>Resume_Sample</li>
                <li className='list-none mt-3'>4 Years</li>
                <li className='list-none mt-3'>Software Engineer II</li>
                <li className='list-none mt-3'>XYZ</li>
                <li className='list-none mt-3'>ABC College of Engineering</li>
                <li className='list-none mt-3'>19 March 2021</li>
                <li className='list-none mt-3'>Demo Client</li>
                <li className='list-none mt-3'>+91 9900000000</li>
                <li className='list-none mt-3'>sample@sample.com</li>
            </div>

            

        </div>
    </>
    )
}

export default CandidateDetails;
