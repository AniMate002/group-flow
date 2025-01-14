import React from 'react'
import LayoutLogo from './LayoutLogo'
import LayoutSidebarProfile from './LayoutSidebarProfile'
import LayoutNavigation from './LayoutNavigation'
import LayoutSidebarLogout from './LayoutSidebarLogout'


const LayoutSidebar:React.FC = () => {

    return (
        <div className='w-[300px] min-h-screen py-[50px] flex flex-col'>
            {/* LOGO */}
            <LayoutLogo />
            
            {/* MINI-PROFILE */}
            <LayoutSidebarProfile />

            {/* NAVIGATION LINKS */}
            <LayoutNavigation />

            {/* LOGOUT */}
            <LayoutSidebarLogout />
        </div>
    )
}

export default LayoutSidebar