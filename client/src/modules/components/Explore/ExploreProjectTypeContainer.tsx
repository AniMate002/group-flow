import React from 'react'
import { ITeam, projectTypeIcons } from '../../../types/types'
import TeamCardHome from '../common/Team/TeamCardHome'

interface ExploreProjectTypeContainerProps {
    type: keyof typeof projectTypeIcons,
    teams: Array<ITeam>
}

const ExploreProjectTypeContainer:React.FC<ExploreProjectTypeContainerProps> = ({ type, teams }) => {
    const IconComponent  = projectTypeIcons[type] 

    const renderedTeams = teams.map(team => <TeamCardHome key={team._id} {...team}/>)
    
    return (
        <div>
            <div className='flex items-center gap-4'>
                <IconComponent  className='text-slate-500 text-4xl'/>
                <p className='capitalize text-white font-semibold text-2xl'>{type}</p>
            </div>

            <div className='flex mt-[20px]'>
                { renderedTeams }
            </div>

        </div>
    )
}

export default ExploreProjectTypeContainer