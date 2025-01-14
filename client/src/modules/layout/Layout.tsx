import React from 'react'
import { Outlet } from 'react-router'
import LayoutSidebar from './components/Sidebar/LayoutSidebar'
import LayoutRightCard from './components/RightCard/LayoutRightCard'


const Layout:React.FC = () => {
  return (
    <div className='min-h-screen max-h-screen overflow-hidden min-w-screen bg-[#252529] flex inter-font text-[#BBBBBB]'>
      {/* SIDEBAR */}
        <LayoutSidebar />
      {/* MAIN CONTENT */}
        <Outlet />
      {/* RAIGHT CARD */}
      <LayoutRightCard />
    </div>
  )
}

export default Layout