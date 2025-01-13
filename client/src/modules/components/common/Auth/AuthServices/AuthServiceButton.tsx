import React from 'react'
import { IconType } from 'react-icons/lib'

interface IAuthServiceButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconType
}

const AuthServiceButton:React.FC<IAuthServiceButton> = (props) => {
  return (
    <button
    {...props}
    className='flex items-center justify-start gap-4 border-[1px] px-[30px] py-[20px] w-[400px] rounded-[8px] border-[#A9A5FD]
    hover:border-[#EBD75C] transition-all duration-[0.2s] hover:text-slate-300'
    >   
        <props.icon 
        className='text-[25px]'/>
        <span 
        className='inter-font tracking-[0.5px] text-[18px]'>{props.children}</span>
    </button>
  )
}

export default AuthServiceButton