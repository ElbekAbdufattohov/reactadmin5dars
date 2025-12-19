import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <ul className='fixed top-0 left-0 flex flex-col gap-[5px] h-screen bg-gray-400 max-w-[300px] w-full p-5'>
      <li>
        <Link
          to="/teachers"
          className='bg-blue-500 w-full inline-block p-2 rounded text-white text-[18px] font-bold'
        >
          Teacher
        </Link>
      </li>

      <li className='pt-2'>
        <Link
          to="/students"
          className='bg-blue-500 w-full inline-block p-2 rounded text-white text-[18px] font-bold'
        >
          Student
        </Link>
      </li>
      <li className='pt-2'>
        <button
          to="/students"
          className='bg-blue-500 w-full inline-block p-2 rounded text-white text-[18px] font-bold'
        >
          Logout
        </button>
      </li>
    </ul>
  )
}

export default Sidebar
