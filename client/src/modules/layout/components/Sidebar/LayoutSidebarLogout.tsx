import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { IoIosExit } from "react-icons/io";
import { LogoutService } from '../../../../services/auth.service';
import { Toast } from '../../../components/common/Alert/Mixin';
import { useNavigate } from 'react-router';

const LayoutSidebarLogout:React.FC = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: logoutMutate, isPending } = useMutation({
        mutationFn: () => LogoutService(),
        onSuccess: async (data) => {
            await queryClient.setQueryData(["authUser"], null)
            navigate("/login")
            console.log("REDIRECTING")
            Toast.fire({
                title: data.message,
                icon: "success",
                showConfirmButton: false
            })
        },
        onError: (error) => {
            navigate("/login")
            Toast.fire({
                title: error.message,
                icon: "error",
                showConfirmButton: false
            })
        },
    })

    const handleLogoutButtoonClick = () => logoutMutate()

    return (
        <button 
        onClick={handleLogoutButtoonClick}
        disabled={isPending}
        className='flex items-center gap-2 w-fit ml-[34px] mt-auto tracking-widest h-[52px] px-[16px] rounded-[14px] hover:bg-[#202024] transition-all duration-[0.1s] active:scale-[0.9]'>
            <IoIosExit className='text-[30px]'/>
            <p className='text-[14px]'>{isPending ? "Loading" : "Logout"}</p>
        </button>
    )
}

export default LayoutSidebarLogout