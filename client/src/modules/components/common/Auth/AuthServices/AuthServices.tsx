import React from 'react'
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

import AuthServiceButton from './AuthServiceButton';

const AuthServices:React.FC = () => {
  return (
    <div className='flex items-center gap-[16px] flex-col'>
        <AuthServiceButton icon={FaGoogle}>Sign in with Google</AuthServiceButton>
        <AuthServiceButton icon={FaFacebook}>Sign in with Facebook</AuthServiceButton>
        <AuthServiceButton icon={FaApple}>Sign in with Apple Account</AuthServiceButton>

    </div>
  )
}

export default AuthServices