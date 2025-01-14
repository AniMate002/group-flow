import React from 'react'
import SingleLink from './SingleLink'
import { HiTemplate } from "react-icons/hi";
import { FaCompass, FaCodepen  } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IconType } from 'react-icons/lib';

const links:Array<{to: string, name: string, icon: IconType}> = [
    {to: "/", name: "Home", icon: HiTemplate}, {to: "explore", name: "Explore", icon: FaCompass}, {to: "/teams", name: "Teams", icon: FaCodepen}, {to:"/developers", name: "Developers", icon: FaUserGroup}
]

const LayoutNavigation:React.FC = () => {
    const renderedLinks = links.map((link, index) => <SingleLink key={index} to={link.to} name={link.name}><link.icon /></SingleLink>)
    return (
        <div className='flex w-full flex-col gap-2 mt-[40px]'>
            { renderedLinks }
        </div>
    )
}

export default LayoutNavigation