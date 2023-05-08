import React from 'react'
import "../assets/skills.css"

import skills from '../jsonfiles/Skills'

const Skills = () => {

    return (
    <>
        <div className="slide-right mt-4 px-2 py-4 rounded-lg bg-white mb-2">
            <p className='text-gray-700 text-md font-medium  '>Skills & Values ({skills.length})</p>

            {skills.map((element)=>{
                return <div className="text-md font-medium" id='skills-section' key={element.id}>
                        <div className="flex mt-6 ">
                            <div >{element.subject} </div>
                            <div className='ml-auto progress-line '>
                                <div className="progress-bar slide-progress " style={{width:`${element.percentage}`}}></div>
                            </div>
                            <div className='ml-12 pr-12'>{element.score} <span className='text-gray-400'> / 800</span> </div>
                        </div>
                    </div>
            })}
            
        </div>
    </>
    )
}

export default Skills

// data-progress = "80"