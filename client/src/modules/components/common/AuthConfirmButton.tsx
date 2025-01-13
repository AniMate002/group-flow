import React from 'react'
import { HiArrowRight } from "react-icons/hi2";

interface IAuthConfirmButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const AuthConfirmButton:React.FC<IAuthConfirmButton> = (props) => {
    return (
        <button
        {...props}
        className='inter-font-bold text-[14px] font-bold py-[20px] rounded-[8px] text-[#000000] w-full bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] flex items-center justify-center gap-[20px]'
        >
            <p>{props.children}</p>
            <HiArrowRight className='text-[16px]'/>
        </button>
    )
}

export default AuthConfirmButton