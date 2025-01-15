import React from 'react'
import { ITeam, projectTypeIcons } from '../../../../types/types'
import { Link, useNavigate } from 'react-router';
import { FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";

interface TeamCardHomeProps extends ITeam {}




const TeamCardHome:React.FC<TeamCardHomeProps> = ({ project_name, team_name, mainImage, coverImage, developers, images, project_type }) => {
    // console.log("DEVELOPERS: ", developers)
    const navigate = useNavigate()
     // GETTING ICON CORRESPONDING TO PROJECT TYPE
     const Icon = projectTypeIcons[project_type] || FaLaptopCode;
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
        className='bg-[#35363F]  rounded-[18px] flex flex-col items-center w-[350px] overflow-hidden cursor-pointer'>
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

            {/* PROJECT NAME & TYPE */}
            <p className="text-white font-bold mt-[5px] flex items-center gap-2">
                <Icon className="text-yellow-400" /> {/* Иконка рядом с названием */}
                {project_name}
            </p>
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

            <div className=' flex items-center justify-center mt-[20px] gap-1 rounded-xl overflow-hidden w-full px-[10px]'>
                {[...images, mainImage, coverImage].slice(0, 3).map((image, index) => (
                    <div key={index} className='flex items-center justify-center  h-[100px]  overflow-hidden rounded-xl'>
                        <img className='w-full h-full object-cover' src={image}/>
                    </div>
                ))}
            </div>

            <Link to={`/team/${team_name}`} className='mt-[10px] text-black bg-[#FDF27B] rounded-[8px] flex items-baseline justify-center w-[330px] mb-[10px] py-[10px] gap-2 hover:text-slate-700 active:scale-[0.9] transition-all duration-[0.2s]'>
                <span>View Team</span>
                <FaExternalLinkAlt className='text-[12px]'/>
            </Link>

            {/* IMAGE MASONRY */}
            {/* <Masonry>
                {[...images, coverImage, mainImage].map((image, index) => <img src={image} key={index}/>)}
            </Masonry> */}
            {/* <Gallery images={images}/> */}

        </div>
    )
}

export default TeamCardHome