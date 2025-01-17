import React from 'react'
import { ITeam, projectTypeIcons } from '../../../types/types'
import TeamCardHome from '../common/Team/TeamCardHome'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router';

interface ExploreProjectTypeContainerProps {
    type: keyof typeof projectTypeIcons,
    teams: Array<ITeam>
}

const ExploreProjectTypeContainer:React.FC<ExploreProjectTypeContainerProps> = ({ type, teams }) => {
    const IconComponent  = projectTypeIcons[type] 

    const renderedTeams = teams.map(team => <TeamCardHome key={team._id} {...team}/>)
    
    return (
        <div>
            {/* TITLE OF THE GROUP OF TEAMS */}
            <div className='flex items-center gap-4'>
                <IconComponent  className='text-slate-500 text-4xl'/>
                <p className='capitalize text-white font-semibold text-2xl'>{type}</p>
                <Link to={`/explore/${type}`} className='ml-auto flex items-center gap-2 hover:opacity-[0.8] transition-all duration-[0.2s] active:opacity-[0.6]'>
                    <span>View all</span>
                    <FaChevronRight className='text-sm'/>
                </Link>
            </div>

            {/* CAROUSEL WITH TEAMS */}
            <div className='flex mt-[20px] w-full justify-between'>
                { renderedTeams }
            </div>

        </div>
    )
}

export default ExploreProjectTypeContainer