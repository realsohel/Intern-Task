import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HiringTeam from './hiring-team';

const Round2 = () => {
    const [arrow, Setarrow] = useState(true);
    
    const handleclick=() =>{
        if(document.getElementById('round1-movement').style.display==="none"){
            document.getElementById('round1-movement').style.display='block';
            Setarrow(true)
        }else{
            document.getElementById('round1-movement').style.display='none';
            Setarrow(false);
        }
    }

    return (
    <>
        <div className="mx-3 mb-4 relative flex bg-blue-100">
            <div className="slide-left px-2  rounded-lg bg-white   w-[70%]" >
                <div className=" mt-4 ">
                    <div className="flex space-x-16">
                        <p className='text-xl font-medium'>Round 1: PEER</p>
                        <p className='bg-blue-100  text-green-600 text-sm font-medium px-2  py-1'> BR EVALUATED</p>
                    </div>
                    <div className="mt-3 text-gray-600 text-md font-medium">
                        Sample Candidate (demo_1)
                    </div>
                    <div className="mt-6  text-gray-900 text-md font-medium mb-4">
                        Interviewer : Barraiser Expert <button onClick={handleclick} className='ml-4 rounded-full border hover:cursor-pointer'> {arrow?<KeyboardArrowUpIcon sx={{ fontSize: 20 }}/> :<KeyboardArrowDownIcon sx={{ fontSize: 20 }}/> }</button>
                    </div>
                    <div  id="round1-movement">
                        <div className='grid grid-cols-2   mt-3 space-x-12 font-medium mb-6'>

                            <div className="  w-[100%] text-gray-500">
                                <li className='list-none mt-3'>Interview Structure:</li>
                                <li className='list-none mt-3'>Total interviews:</li>
                                <li className='list-none mt-3'>Total Work Exp:</li>
                                <li className='list-none mt-3'>Current Role:</li>
                                <li className='list-none mt-3'>Previous Employer(s):</li>
                                <li className='list-none mt-3'>Alma Mater:</li>
                                <li className='list-none mt-3'>Applied for:</li>
                            </div>

                            <div className="w-[100%] text-gray-800">
                                <li className='list-none mt-3 text-blue-500 underline  underline-offset-4 tracking-wide decoration-1 '>Interview_Structure</li>
                                <li className='list-none mt-3'>162</li>
                                <li className='list-none mt-3'>4 Years</li>
                                <li className='list-none mt-3'>SDE 2</li>
                                <li className='list-none mt-3'>JFrog</li>
                                <li className='list-none mt-3'>IIT Kharagpur</li>
                                <li className='list-none mt-3'>Demo Client</li>
                            </div>



                        </div>
                    </div>
                </div>                
            </div>
            <HiringTeam/>
        </div>
    </>
    )
}

export default Round2;
