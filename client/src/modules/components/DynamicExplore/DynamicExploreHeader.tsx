import React from 'react'
import ShipImage from "../../../assets/images/ship-explore.jpg"

interface DynamicExploreHeaderProps {
    projectType: string
}

const DynamicExploreHeader:React.FC<DynamicExploreHeaderProps> = ({ projectType }) => {
    return (
        <div className='w-full flex justify-center items-center relative overflow-hidden rounded-[18px] h-[200px] flex-col'>
            <img src={ShipImage} className='min-w-full min-h-full absolute'/>
            <p className='relative uppercase text-white font-bold tracking-widest text-3xl'>{projectType}</p>
            <p className='relative uppercase  font-bold tracking-widest text-xl'>291,021 Teams</p>
        </div>
    )
}

export default DynamicExploreHeader