import React from 'react'

const Loading:React.FC = () => {
    return (
        <div className='flex items-center justify-center w-full gap-4 mt-[30px]'>
            <p className='text-[#FDF27B] text-2xl font-semibold'>Loading...</p>
            <span className="loading loading-infinity loading-lg text-center text-[#D4D4FF]"></span>
        </div>
    )
}

export default Loading