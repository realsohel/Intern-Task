import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';


import "../assets/hiringteam.css"


const HiringTeam = () => {

    const [arrow, Setarrow] = useState(true);

    const handleclick=() =>{
        // let content = document.getElementById('content');
        // console.log(content.style.display)'
        
        if(document.getElementById('content').style.display==="none"){
            document.getElementById('content').style.display='block';
            Setarrow(true)
        }else{
            document.getElementById('content').style.display='none';
            Setarrow(false);
        }

    }
    return (
    <>
    
    <div className="">
    <div className="mx-3  max-w-[400px]   font-medium  overflow-hidden sticky float-right right-0 top-0  z-[100] ">
        <div className="collapsible  ">
            <label className=' bg-blue-600 text-white'>
                <button onClick={handleclick}> Hiring Team Discussion </button>
                <span className='ml-36'>{arrow?<KeyboardArrowUpIcon/> :<KeyboardArrowDownIcon/> }</span>
            </label>
            <div className="collapsible-text slide-down relative text-center bg-white " id="content">
                {/* <h2>Hiring Team Discussion </h2> */}
                <img src="/images/chat.webp" className="w-[100%] " alt="" />
                <p className='absolute top-[70%] left-2 text-gray-600 mb-12'> Add your comments/remarks for other team members.</p>
                
                <div className="sticky bottom-0  bg-white mt-20 border rounded-lg">

                    <div className=" bg-gray-100 font-normal p-2 rounded-lg m-2 text-gray-400">
                        Add a comment...  
                        <span className='pl-24 ml-10'> <EmojiEmotionsIcon color="pink" /></span> |
                        <span className='pl-2'><SendIcon/></span>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
    </>
    )
}

export default HiringTeam
