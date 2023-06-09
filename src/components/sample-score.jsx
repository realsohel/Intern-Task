import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

import "../assets/samplescore.css"
import Skills from './skills';
import Remark from './remark';
import CandidateDetails from './candidate-details';

const SampleScore = () => {
    const [arrow, Setarrow] = useState(true);
    
    const handleclick=() =>{
        if(document.getElementById('candidate').style.display==="none"){
            document.getElementById('candidate').style.display='block';
            Setarrow(true)
        }else{
            document.getElementById('candidate').style.display='none';
            Setarrow(false);
        }
    }
    return (
    <>
        <div className="mx-3 mb-4 relative w-[100%] md:w-auto">
            <div className="slide-left px-2  rounded-lg bg-white flex space-x-6 md:space-x-64" >
                <div className=" mt-4 ">
                    <div className="md:flex   md:space-x-16">
                        <p className='text-xl font-medium'>Sample Candidate</p>
                        <p className='bg-blue-100  text-green-600 text-sm font-medium px-2  py-1 '> HIGHLY RECOMMENDED</p>
                    </div>
                    <div className="mt-3 text-gray-600 text-md font-medium">
                        demo_1 • (Software Backend Development)
                    </div>
                    <div className="mt-6  text-gray-900 text-md font-medium mb-4">
                        Candidate details <button onClick={handleclick} className='ml-4 rounded-full border hover:cursor-pointer'> {arrow?<KeyboardArrowUpIcon sx={{ fontSize: 20 }}/> :<KeyboardArrowDownIcon sx={{ fontSize: 20 }}/> }</button>
                    </div>
                    <div  id="candidate"> <CandidateDetails/></div>
                </div>

                <div className=" mt-2 ">
                    <div className="progress first ">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value font-medium ">630 / 800</div>
                        {/* <div className="language mt-40 justify-center text-center font-bold text-xl"></div> */}
                    </div>
                </div>
                
            </div>


            <Skills/>

            <div className="mt-4 px-2 py-4 rounded-lg bg-white mb-2 ">
                <p className='text-gray-700 text-md font-medium' >All Rounds (2)</p>

                <div className="flex space-x-4 mt-4">

                    <div className=" rounded-md w-[30%] border shadow-lg" >
                        <a href="https://www.youtube.com/watch?v=KTJQdbvCMag">
                            <div className="bg-blue-100   h-[18vh] px-20 pt-4  cursor-pointer">
                                <PlayCircleFilledWhiteIcon className=' m-4 my-6 'sx={{ fontSize: 40 }} color="primary"/>
                            </div>
                        </a>
                        <div className="p-3">
                            <p className='text-gray-600 font-medium'> Round 1: <span className='text-gray-900'>PEER</span></p>
                            <p className='text-gray-600 font-medium'> Score: <span className='text-black'> 0 </span><span className='text-gray-900'>/ 800</span></p>
                            <p className='text-gray-600 font-medium'> Interviewer: <span className='text-gray-900'>BR Expert</span></p>
                        </div>
                    </div>

                    <div className=" rounded-md w-[30%] border shadow-lg" >
                        <a href="https://www.youtube.com/watch?v=KTJQdbvCMag">
                            <div className="bg-blue-100   h-[18vh] px-20 pt-4  cursor-pointer">
                                <PlayCircleFilledWhiteIcon className=' m-4 my-6 'sx={{ fontSize: 40 }} color="primary"/>
                            </div>
                        </a>
                        <div className="p-3">
                            <p className='text-gray-600 font-medium'> Round 2: <span className='text-gray-900'>EXPERT</span></p>
                            <p className='text-gray-600 font-medium'> Score: <span className='text-black'> 0 </span><span className='text-gray-900'>/ 800</span></p>
                            <p className='text-gray-600 font-medium'> Interviewer: <span className='text-gray-900'>BR Expert</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <Remark/>
        </div>
    </>
    )
}

export default SampleScore
