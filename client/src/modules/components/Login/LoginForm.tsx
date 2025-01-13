import React, { useState } from 'react'
import AuthInput from '../common/Auth/AuthInput'
import AuthConfirmButton from '../common/Auth/AuthConfirmButton'
import { Link } from 'react-router'
import { logIn } from '../../../services/auth.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '../common/Alert/Mixin'



const LoginForm:React.FC = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    
    const queryClient = useQueryClient()
    const { mutate: logInMutate, isPending } = useMutation({
        mutationFn: () => logIn(username, password),
        onSuccess: (data) => {
            queryClient.setQueryData(["authUser"], data)
            Toast.fire({
                title: "Signed in successfully!",
                icon: "success",
                showConfirmButton: false
            })
        },
        onError: (error) => {
            Toast.fire({
                title: error.message,
                icon: "error",
                showConfirmButton: false

            })
        }
    })
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        logInMutate()
    }


    return (
        <form onSubmit={e => handleFormSubmit(e)} className='flex flex-col gap-[16px] w-[400px]'>
            {/* EMAIL */}
            <AuthInput placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>

            {/* PASSWORD */}
            <AuthInput placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="password"/>

            {/* CONFIRM BUTTON */}
            <AuthConfirmButton disabled={isPending}>{isPending ? "Loading" : "Login to Your Account"}</AuthConfirmButton>

            {/* DON'T HAVE AN ACCOUNT ? */}
            <p className='text-sm text-[#898889]'>
                <span>Don't have an account yet? </span>
                <Link to={"/signup"} className='text-white'>Register now!</Link>
            </p>
        </form>
    )
}

export default LoginForm