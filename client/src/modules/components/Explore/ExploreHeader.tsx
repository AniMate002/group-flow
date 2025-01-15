import React from 'react'
import TextImage_One from "../../../assets/images/explore_one.png"
import TextImage_Two from "../../../assets/images/explore_two.png"

const ExploreHeader:React.FC = () => {
    return (
        <div className='flex items-center justify-between gap-4 bg-[#35363F] rounded-[18px] p-[10px]'>
            <div className='flex flex-col justify-center items-center overflow-hidden w-1/2 h-[300px] rounded-[18px] relative glass-shadow'>
                <img src={TextImage_One} className='absolute'/>
                <div className='absolute w-full h-full backdrop-blur-sm'></div>
                <h3 className='relative self-start ml-[20px] font-semibold text-white text-4xl'>Collaborate</h3>
                <p className='relative w-[60%] mr-[20px] self-end text-sm mt-[10px] backdrop-blur-sm bg-white/10 p-[10px] rounded-xl'>Join forces with like-minded individuals to bring your ideas to life, achieve more, innovate faster.</p>
            </div>

            <div className='flex flex-col justify-center items-center overflow-hidden w-1/2 h-[300px] rounded-[18px] relative glass-shadow'>
                <img src={TextImage_Two} className='absolute'/>
                <div className='absolute w-full h-full backdrop-blur-sm'></div>
                <h3 className='relative self-end mr-[20px] font-semibold text-white text-4xl'>Develop</h3>
                <p className='relative w-[60%] ml-[20px] self-start text-sm mt-[10px] backdrop-blur-sm bg-white/10 p-[10px] rounded-xl'>Transform ideas into reality by building, refining, and innovating. Push boundaries and create.</p>
            </div>
        </div>
    )
}

export default ExploreHeader