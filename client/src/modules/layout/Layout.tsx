import React from 'react'
import { Outlet } from 'react-router'
import LayoutSidebar from './components/Sidebar/LayoutSidebar'


const Layout:React.FC = () => {
  return (
    <div className='min-h-screen min-w-screen bg-[#252529] flex inter-font text-[#BBBBBB]'>
        <LayoutSidebar />
        <Outlet />
    </div>
  )
}

export default Layout