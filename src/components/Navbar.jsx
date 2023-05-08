import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className='bg-blue-100  rounded-lg sticky top-0 w-[100%] z-[100]' >
            <ul className='flex m-4 space-x-12  font-medium hover:cursor-pointer py-3 pt-6'>
                <li className='hover-underline-animation  hover:underline underline-offset-8 decoration-2 hover:text-blue-600'>Overview</li>
                <li className='hover-underline-animation  hover:underline underline-offset-8 decoration-2 hover:text-blue-600'>Round2</li>
                <li className='hover-underline-animation  hover:underline underline-offset-8 decoration-2 hover:text-blue-600'>Round1</li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
