import React from 'react'
import "../assets/skills.css"

import skills from '../jsonfiles/Skills'

const Skills = () => {

    // const skillsSection = document.getElementById('skills-section');
    // const progressBars = document.querySelectorAll('.progress-bar');

    // function showProgress(){
    //     progressBars.forEach(p =>{
    //         const value = progressBars.dataset.progress;
    //         p.style.opacity = 1;
    //         p.style.width = `${value}%`; 
    //     });
    // }

    // function hideProgress(){
    //     progressBars.forEach(p =>{
    //         p.style.opacity = 1;
    //         const value = progressBars.dataset.progress;
    //         p.style.width = `${value}%`; 
    //     });
    // }

    // window.addEventListener('scroll', ()=>{
    //     const sectionPos = skillsSection.getBoundingClientRect().top;
    //     const screenPos = window.innerHeight;

    //     if(sectionPos < screenPos){
    //         showProgress();
    //     }
    //     else{
    //         hideProgress();
    //     }
    // })

    return (
    <>
        <div className="mt-4 px-2 py-4 rounded-lg bg-white mb-2">
            <p className='text-gray-700 text-md font-medium  '>Skills & Values ({skills.length})</p>

            {skills.map((element)=>{
                return <div className="text-md font-medium" id='skills-section' key={element.id}>
                        <div className="flex mt-6 ">
                            <div >{element.subject} </div>
                            <div className='ml-auto progress-line '>
                                <div className="progress-bar slide-right" style={{width:`${element.percentage}`}}></div>
                            </div>
                            <div className='ml-16'>{element.score} </div>
                        </div>
                    </div>
            })}
            
        </div>
    </>
    )
}

export default Skills

// data-progress = "80"