import React from 'react'
import { FaSignalMessenger } from "react-icons/fa6";
import { Link } from 'react-router';

const LayoutLogo:React.FC = () => {
    return (
        <Link to={"/"} className='flex items-center w-full gap-2 text-[#FDF27B] tracking-widest text-3xl font-bold justify-center'>
            <FaSignalMessenger />
            <p>GroupFlow</p>
        </Link>
    )
}

export default LayoutLogo