import React from 'react'
import { FaRocketchat } from "react-icons/fa";

const LayoutRightCard:React.FC = () => {
    
    return (
        <div className='w-[400px] flex-shrink-0 h-[90vh] self-center mr-[30px] flex flex-col rounded-[18px] bg-[#35363F] p-[10px]'>
            <div className='flex items-center justify-center flex-col rounded-[10px] bg-[#2d2d33] w-full h-full'>
                <FaRocketchat className='text-[#FDF27B] text-5xl'/>
                <p className='font-semibold tracking-widest mt-[20px]'>It is quite here for now...</p>
                <p className='text-sm mt-[5px] text-slate-600 w-[70%] text-center'>As soon as you open Project/Team You will see details.</p>
            </div>
        </div>
    )
}

export default LayoutRightCard