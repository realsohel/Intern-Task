import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Remark = () => {
    return (
    <>
        <div className="mt-4 px-2 py-4 rounded-lg bg-white mb-2 ">
            <p className='text-gray-700 text-md font-medium' >Interviewer's Remark </p>

            <div className="flex my-4 space-x-4">
                <li className='list-none cursor-pointer border px-2 rounded-md bg-blue-500 font-normal '> All</li>
                <li className='list-none cursor-pointer border px-2 rounded-md bg-blue-100  font-normal'> Round 2</li>
                <li className='list-none  cursor-pointer border px-2 rounded-md bg-blue-100  font-normal'> Round 1</li>
            </div>

            <div className="text-green-600 font-bold text-lg" >
                <CheckCircleIcon/> <span className='p-1'>Strengths</span>
            </div>
            <div className=" font-medium my-3">
            - He is good at understanding requirements and problems statements. <br/>
            - He is good at communication.  <br /> 
            - He has  knowledge of both SQL and MySQL DOS. - He has experience in creating REST APIs.  <br /> 
            - He has  the  capability  to work on a project from scratch.  <br /> 
            - He has good communication skills and he was confident while expressing his views. 
            </div>

            <div className="text-red-500 font-bold text-lg" >
                <WarningIcon/> <span className='p-1'>Areas to Improve </span>
            </div>
            <div className=" font-medium my-3">
                - He should learn more about low level implementation of various systems . <br />
                - He needs some revision of OOPs concepts. 

            </div>
            
        </div>

        <div className="mt-4 px-2 py-4 rounded-lg bg-white mb-2 ">
            <p className='text-gray-700 text-md font-medium' >Skills details</p>

            <div className="text-gray-900 my-3 border bg-blue-100  rounded-lg p-3 font-bold text-xl">Soft Skills </div>
            
            <div className="border rounded-lg shadow-lg">

                <div className="flex m-2 my-4 p-1 space-x-96">
                    <div className="text-gray-700 font-medium  rounded-lg ">
                        <b>1.</b> Explain one of your latest project? 
                    </div>
                    <div className="px-3 text-green-700 border-2 border-green-700 ">
                        <EmojiEmotionsIcon sx={{ fontSize: 20 }} color="green"/> 
                        <span className='font-bold text-gray-800'>8</span> <span className='text-gray-800 font-medium'>/10</span> </div>
                </div>

                <div className="m-4 bg-blue-100 text-gray-900 rounded-lg p-2 font-medium">
                    <p> Feedback: </p>
                    <p className='mx-2'> 
                        He is good at communication Discussed past experience and projects He worked on. </p>
                    <p className='mx-2'> 
                        First, he focused on requirements/ challenges then explained about technologies that <br /> were used to accomplish the goal. </p>
                </div>
            </div>

            <div className="border rounded-lg shadow-lg my-6">

                <div className="flex m-2 my-4 p-1 space-x-44">
                    <div className="text-gray-700 font-medium  rounded-lg mr-2">
                        <b>2.</b> How will you design ticket booking system like Bookmyshow? 
                    </div>
                    <div className="px-3 text-green-700 border-2 border-green-700 ml-8">
                        <EmojiEmotionsIcon sx={{ fontSize: 20 }} color="green"/> 
                        <span className='font-bold text-gray-800'>9 </span> <span className='text-gray-800 font-medium'>/10</span> 
                    </div>
                </div>

                <div className="m-4 bg-blue-100 text-gray-900 rounded-lg p-2 font-medium">
                    <p> Feedback: </p>
                    <p className='mx-2'> 
                        He discussed the non-technical requirement asked about various use cases to refine the requirements. </p>
                    
                </div>
            </div>

            <div className="border rounded-lg shadow-lg my-6 space-x-16 ">

                <div className="flex m-2 my-4 p-1 ">
                    <div className="text-gray-700 font-medium  rounded-lg w-[60%] mr-1">
                        <b>3.</b> Suppose there is venue and that venue has multiple every , <br />
                        meeting has its own start and end time and there are to times <br />   enter and exit there are to the that venue Input: meeting[][] = <br />
                        {`${"{{15, 19}, {5, 10}, {7, 25}}, entrance[] = {4, 13, 25}, exit[] = {10, 21} "}`} <br /> 
                        {`${"find the minimum time in which a user can one"}`}  meeting.
                    </div>
                    <div className=" ml-[11.5rem] ">
                        <div className="px-3  text-red-600 border-2 border-red-600">
                        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 20 }} color="green"/> 
                        <span className='font-bold text-gray-800'>0 </span> <span className='text-gray-800 font-medium'>/10</span> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-lg shadow-lg my-6 ml-3">

                <div className="flex m-2 my-4 p-1 space-x-48">
                    <div className="text-gray-700 font-medium  rounded-lg mr-5">
                        <b>3.a</b> What would be the time complexity of your approach ? 
                    </div>
                    <div className="px-3  text-red-600 border-2 border-red-600 ml-2">
                        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 20 }} color="green"/> 
                        <span className='font-bold text-gray-800'>0 </span> <span className='text-gray-800 font-medium'>/10</span> 
                    </div>
                </div>
            </div>

            <div className="border rounded-lg shadow-lg my-6 ">

                <div className="flex m-2 my-4 p-1 space-x-60">
                    <div className="text-gray-700 font-medium  rounded-lg mr-16">
                        <b>4.</b> Have you worked on any projects on scratch? 
                    </div>
                    <div className="px-3  text-red-600 border-2 border-red-600 ml-8">
                        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 20 }} color="green"/> 
                        <span className='font-bold text-gray-800'>0 </span> <span className='text-gray-800 font-medium'>/10</span> 
                    </div>
                </div>
            </div>

            <div className="border rounded-lg shadow-lg my-6 space-x-16 ">

                <div className="flex m-2 my-4 p-1 ">
                    <div className="text-gray-700 font-medium  rounded-lg w-[60%] mr-2">
                        <b>5.</b> Suppose you have to build software for the vending has its<br />
                        manage the inventory. Requirement:- Vending Machine keep <br /> 
                        track of the inventory II A person should be able insert cash<br /> 
                        into the machine, choose an item. The Machine should confirm<br />
                        inserted  cash with the price of the selected item The machine <br />
                        must display an error in case of insufficient cash unavailable <br />
                        item // Finally, if all the above steps succeed then the user <br />
                        the selected item.
                    </div>
                    <div className=" ml-[11.5rem] ">
                        <div className="px-3  text-red-600 border-2 border-red-600">
                        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 20 }} color="green"/> 
                        <span className='font-bold text-gray-800'>0 </span> <span className='text-gray-800 font-medium'>/10</span> 
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
    </>
    )
}

export default Remark

// How will you design ticket booking system like Bookmyshow? 