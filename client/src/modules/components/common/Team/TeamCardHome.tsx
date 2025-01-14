import React from 'react'
import { ITeam } from '../../../../types/types'
import { Gallery } from "react-grid-gallery";
import { Link, useNavigate } from 'react-router';

interface TeamCardHomeProps extends ITeam {}

const TeamCardHome:React.FC<TeamCardHomeProps> = ({ project_name, team_name, mainImage, coverImage, developers, images }) => {
    // console.log("DEVELOPERS: ", developers)
    const navigate = useNavigate()
    // ALL RENDERED DEVELOPERS
    const renderedDevelopers = developers?.slice(0, 5).map(developer => (
        <div className="avatar" key={developer._id}>
            <div className="w-12">
                <img src={developer.mainImage} />
            </div>
        </div>
    ))
    return (
        <div 
        onClick={() => navigate(`/team/${team_name}`)}
        className='bg-[#35363F]  rounded-[18px] flex flex-col items-center w-[300px] overflow-hidden cursor-pointer'>
            {/* COVER IMAGE */}
            <div className='h-[200px] flex items-center justify-center overflow-hidden rounded-t-[18px]'>
                <img className='min-h-full min-w-full' src={coverImage}/>
            </div>

            {/* AVATAR */}
            <div className="avatar mt-[-40px]">
                <div className="w-24 rounded-full">
                    <img src={mainImage} />
                </div>
            </div>

            {/* PROJECT NAME */}
            <p className='text-white font-bold mt-[5px]'>{project_name}</p>
            {/* TEAM NAME */}
            <p className='text-slate-500 inter-font text-sm'>Team: {team_name}</p>

            {/* DEVELOPERS COUNT */}
            <div className="avatar-group -space-x-6 rtl:space-x-reverse mt-[20px]">
                { renderedDevelopers }
                { 
                developers.length > 5 ? 
                // SHOWING DEVELOPERS COUNTER IF MORE THAN %
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-12">
                        <span>+99</span>
                    </div>
                </div>
                :
                null
                }
            </div>


            {/* IMAGES */}

            <div className=' flex items-center justify-center mt-[20px] gap-1 rounded-xl w-fit overflow-hidden'>
                {[...images, mainImage, coverImage].slice(0, 3).map((image, index) => (
                    <div key={index} className='flex items-center justify-center w-[100px] h-[100px]  overflow-hidden'>
                        <img className='w-full h-full object-cover' src={image}/>
                    </div>
                ))}
            </div>

            {/* IMAGE MASONRY */}
            {/* <Masonry>
                {[...images, coverImage, mainImage].map((image, index) => <img src={image} key={index}/>)}
            </Masonry> */}
            {/* <Gallery images={images}/> */}

        </div>
    )
}

export default TeamCardHome