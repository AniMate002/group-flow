import React from 'react'

interface IAuthHeader {
    title: string,
    body: string
}

const AuthHeader:React.FC<IAuthHeader> = ({ body, title }) => {
  return (
    <div className='text-center w-[40%]'>
        <h3 className='text-white text-[44px] space-grotesk-font font-medium'>{title}</h3>
        <p className='mt-[20px] text-[#898889] inter-font text-[16px]'>{body}</p>
    </div>
  )
}

export default AuthHeader