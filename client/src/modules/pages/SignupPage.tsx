import React from 'react'
import AuthHeader from '../components/common/Auth/AuthHeader'
import SignupForm from '../components/Signup/SignupForm'
import curve from "../../assets/images/curve.png"
import AuthServices from '../components/common/Auth/AuthServices/AuthServices'
import AuthFooter from '../components/common/Auth/AuthFooter'


const SignupPage:React.FC = () => {
    return (
        <div className='min-h-screen min-w-screen bg-[#1D1D1F] text-white flex flex-col justify-center items-center gap-[70px]'>
        {/* HEADER */}
        <AuthHeader 
        title='Create a New Account'
        //  TODO: change body fish text
        body='Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />

        {/* LOGIN MAIN */}
        <div className='flex w-[60%] items-center justify-between'>
            {/* SIGNUP FORM */}
            <SignupForm />

            {/* CURVE IMAGE */}
            <img src={curve}/>

            {/* LOGIN SERVICES */}
            <AuthServices />
        </div>

        {/* AUTH FOOTER */}
        <AuthFooter />
        
        </div>
    )
}

export default SignupPage