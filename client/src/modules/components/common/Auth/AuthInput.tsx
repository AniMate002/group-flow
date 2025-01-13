import React from 'react'

interface IAuthInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const AuthInput:React.FC<IAuthInput> = (props) => {
  return (
        <input 
        {...props}
        className='bg-[#222222] py-[20px] px-[20px] rounded-[8px] text-[#898889] focus-within:outline-none'
        />
  )
}

export default AuthInput