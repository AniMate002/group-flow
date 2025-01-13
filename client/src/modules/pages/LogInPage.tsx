import React from 'react'
import AuthHeader from '../components/common/Auth/AuthHeader'
import LoginForm from '../components/Login/LoginForm'
import curve from "../../assets/images/curve.png"
import AuthServices from '../components/common/Auth/AuthServices/AuthServices'
import AuthForgotPassword from '../components/common/Auth/AuthForgotPassword'
import AuthFooter from '../components/common/Auth/AuthFooter'

const LogInPage:React.FC = () => {
  return (
    <div className='min-h-screen min-w-screen bg-[#1D1D1F] text-white flex flex-col justify-center items-center gap-[70px]'>
      {/* HEADER */}
       <AuthHeader 
       title='Login to Your Account' 
      //  TODO: change body fish text
       body='Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
       
       {/* LOGIN MAIN */}
       <div className='flex w-[60%] items-center justify-between'>
          {/* LOGIN FORM */}
          <LoginForm />

          {/* CURVE IMAGE */}
          <img src={curve}/>

          {/* LOGIN SERVICES */}
          <AuthServices />

       </div>
        {/* FORGOT PASSWORD */}
        <AuthForgotPassword />

        {/* AUTH FOOTER */}
        <AuthFooter />
    </div>
  )
}

export default LogInPage