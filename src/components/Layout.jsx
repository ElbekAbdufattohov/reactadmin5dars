import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Sidebar/>
    <main className='pl-[320px] pt-5'>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout