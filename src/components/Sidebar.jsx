import React from 'react'

function Sidebar() {
    return (
        <ul className='fixed top-0 left-0 flex flex-col gap-5px h-screen bg-gray-400 max-w-[300px] w-full p-5'>
            <li>
                <a className=' bg-blue-500 w-full inline-block p-2 rounded text-white text-[18px] font-bold cursor-pointer' href="/teachers">Teacher</a>
            </li>
            <li className='pt-2'>
                <a className=' bg-blue-500 w-full inline-block p-2 rounded text-white text-[18px] font-bold cursor-pointer' href="/students">Student</a>
            </li>
        </ul>
    )
}

export default Sidebar