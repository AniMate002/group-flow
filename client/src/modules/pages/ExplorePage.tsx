import React, { useState } from 'react'
import ExploreHeader from '../components/Explore/ExploreHeader'
import ExploreSearchFilter from '../components/Explore/ExploreSearchFilter'
import { projectTypeIcons } from '../../types/types'
import ExploreTeams from '../components/Explore/ExploreTeams'
import { getTeamsByTextQueryService } from '../../services/team.services'
import { useQuery } from '@tanstack/react-query'
import { Keys } from '../../utils/query-keys'


const ExplorePage:React.FC = () => {
    const [activeProjectType, setActiveProjectType] = useState<keyof typeof projectTypeIcons | null>(null)
    const [textQuery, setTextQuery] = useState<string>("")

    useQuery({
        queryKey: [Keys.searchTeams],
        queryFn: () => getTeamsByTextQueryService(textQuery),
        enabled: false,
    })
    
    return (
        <div className='flex-grow p-[50px] hide-scrollbar'>
            {/* HEADER CARDS */}
            <ExploreHeader />

            {/* FILTER & SORT COMPONENT */}
            <ExploreSearchFilter activeProjectType={activeProjectType} setActiveProjectType={setActiveProjectType} textQuery={textQuery} setTextQuery={setTextQuery}/>

            {/* LIST OF ALL TEAMS */}
            <ExploreTeams activeProjectType={activeProjectType} textQuery={textQuery}/>
        </div>
    )
}

export default ExplorePage