import React from 'react'
import Ship from "../../../assets/images/ship.jpg"
import { Link } from 'react-router'

const HomeHeader:React.FC = () => {

    return (
        <div className='flex justify-between items-center w-full '>

            {/* CONTAINER */}
            <div 
            className="flex items-center justify-center overflow-hidden w-full h-[400px] rounded-[18px] relative">
                {/* СЖАТЬ ИЗОБРАЖЕНИЯ ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ */}
                {/* HEADER IMAGE */}
                <img src={Ship} className='absolute'/>

                {/* CONTENT */}
                <div className='w-[70%] text-center flex flex-col items-center justify-center gap-4 relative  '>
                    <p className='text-slate-200 inter-font-bold text-5xl'>Where Developers & Creators Connect</p>
                    <p className='text-white font-bold text-sm'>Developers can 
                        easily filter, find and connect
                        with teams big or small to improve their project, promoting it to larger audience!
                    </p>
                    {/* BUTTON */}
                    <Link 
                    to={"/explore"}
                    className='bg-[#FDF27B] text-black relative font-bold px-[40px] py-[15px] rounded-[6px] active:scale-[0.9] hover:scale-[1.05] transition-all duration-[0.2s] '>Get started</Link>
                </div>

            </div>
            
        </div>
    )
}

export default HomeHeader