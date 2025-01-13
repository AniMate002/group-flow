import React, { useState } from 'react'
import AuthInput from '../common/AuthInput'
import AuthConfirmButton from '../common/AuthConfirmButton'


const LoginForm:React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return (
        <form className='flex flex-col gap-[16px] w-[400px]'>
            {/* EMAIL */}
            <AuthInput placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="email"/>

            {/* PASSWORD */}
            <AuthInput placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="password"/>

            {/* CONFIRM BUTTON */}
            <AuthConfirmButton>Login to Your Account</AuthConfirmButton>
        </form>
    )
}

export default LoginForm