import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className='bg-blue-100 rounded-lg sticky top-0 w-[100%] z-[100] ' >
            <ul className='flex m-4 space-x-12  font-medium hover:cursor-pointer py-3 pt-6'>
                <Link to="/"      className='hover-underline-animation   hover:underline underline-offset-8 decoration-2  hover:text-blue-600 focus:text-blue-600 focus:underline focus:underline-offset-8'>Overview</Link>
                <Link to='/round2' className='hover-underline-animation   hover:underline underline-offset-8 decoration-2 hover:text-blue-600 focus:text-blue-600 focus:underline focus:underline-offset-8'>Round2</Link>
                <Link to='/round1' className='hover-underline-animation  hover:underline underline-offset-8 decoration-2 hover:text-blue-600 focus:text-blue-600 focus:underline focus:underline-offset-8'>Round1</Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
