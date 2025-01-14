import React from 'react'
import { NavLink } from 'react-router'

interface SingleLinkProps {
    to: string,
    name: string,
    children: React.ReactNode
}

const SingleLink:React.FC<SingleLinkProps> = ({ to, name, children}) => {
    const unactiveLinkStyles = 'flex items-center gap-4 w-[160px] mx-auto h-[52px] px-[16px] rounded-[14px] hover:bg-[#202024] transition-all duration-[0.1s]'
    return (
        <NavLink 
        to={to}
        className={({ isActive }) =>
            isActive ? unactiveLinkStyles + " bg-[#4C4C4C] text-[#D4D4FF] inter-font-bold scale-[1.01]" : unactiveLinkStyles
          }
        >
            <p className='text-[30px]'>{children}</p>
            <p className='text-[16px] font-light'>{name}</p>
        </NavLink>
    )
}

export default SingleLink