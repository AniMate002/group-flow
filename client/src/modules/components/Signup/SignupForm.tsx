import React, { useState } from 'react'
import AuthInput from '../common/Auth/AuthInput'
import AuthConfirmButton from '../common/Auth/AuthConfirmButton'
import { Link } from 'react-router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SignupService } from '../../../services/auth.service'
import { Toast } from '../common/Alert/Mixin'

const SignupForm:React.FC = () => {
    const [fullname, setFullname] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const queryClient = useQueryClient()
    const { mutate: signupMutate, isPending } = useMutation({
        mutationFn: () => SignupService(fullname, username, email, password),
        onSuccess: (data) => {
            console.log("SIGN UP DATA: ", data)
            queryClient.setQueryData(["authUser"], data)
            Toast.fire({
                title: "Signed up successfully!",
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

    const handleSignupFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signupMutate()
    }

    return (
        <form onSubmit={e => handleSignupFormSubmit(e)} className='flex flex-col gap-[16px] w-[400px]'>
            {/* FULLNAME */}
            <AuthInput  placeholder='Fullname' value={fullname} onChange={e => setFullname(e.target.value)}/>

            {/* USERNAME */}
            <AuthInput placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>

            {/* EMAIL */}
            <AuthInput placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type='email'/>

            {/* PASSWORD */}
            <AuthInput placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type='password'/>

            {/* SUBMIT BUTTON */}
            <AuthConfirmButton disabled={isPending}>{isPending ? "Loading" : "Create a New Account"}</AuthConfirmButton>

            {/* HAVE AN ACCOUNT ? */}
            <p className='text-sm text-[#898889]'>
                <span>Have an account? </span>
                <Link to={"/login"} className='text-white'>Sign in!</Link>
            </p>
        </form>
    )
}

export default SignupForm