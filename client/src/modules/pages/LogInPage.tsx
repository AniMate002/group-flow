import React from 'react'
import AuthHeader from '../components/common/AuthHeader'
import LoginForm from '../components/Login/LoginForm'

const LogInPage:React.FC = () => {
  return (
    <div className='min-h-screen min-w-screen bg-[#1D1D1F] text-white flex flex-col justify-center items-center'>
      {/* HEADER */}
       <AuthHeader 
       title='Login to Your Account' 
       body='Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
       
       <div className='flex w-[60%] items-center justify-between mt-[40px]'>
          <LoginForm />
       </div>
    </div>
  )
}

export default LogInPage