import React from 'react'
import { IconType } from 'react-icons/lib'


interface SingleFilterButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconType,
    active: boolean,
}

const SingleFilterButton:React.FC<SingleFilterButtonProps> = (props) => {
    
  return (
    <button
    {...props}
    className={`active:scale-[0.9] transition-all duration-[0.2s] capitalize flex items-center justify-center gap-2 px-[15px] py-[10px] rounded-xl ${props.active ? "bg-[#474a55] text-yellow-300" : "bg-[#35363f]"}`}
    >
        <props.icon className='text-2x' />
        <p>{props.children}</p>
    </button>
  )
}

export default SingleFilterButton