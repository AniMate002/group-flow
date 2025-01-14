import React from 'react'

const LayoutSidebarProfile:React.FC = () => {
    return (
        <div className='flex items-center flex-col gap-4 mt-[100px]'>
            {/* AVATAR */}
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            {/* NAME */}
            <p className='text-[#EDEDF1] inter-font tracking-wider'>Ryan Gosling</p>

            {/* EDIT BUTTON */}
            <button className='border-[1px] rounded-full border-[#45464D] px-[15px] py-[5px] text-[14px]'>
                Edit
            </button>
        </div>
    )
}

export default LayoutSidebarProfile