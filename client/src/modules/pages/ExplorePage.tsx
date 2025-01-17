import React, { useState } from 'react'
import ExploreHeader from '../components/Explore/ExploreHeader'
import ExploreSearchFilter from '../components/Explore/ExploreSearchFilter'
import { projectTypeIcons } from '../../types/types'
import ExploreTeams from '../components/Explore/ExploreTeams'


const ExplorePage:React.FC = () => {
    const [activeProjectType, setActiveProjectType] = useState<keyof typeof projectTypeIcons | null>(null)

    // const { data: searchTeams, isLoading, isError, error, refetch } = useQuery({
    //     queryKey: [Keys.searchTeams],
    //     queryFn: () => getTeamsByTextQueryService(textQuery),
    //     enabled: false,
    // })
    
    return (
        <div className='flex-grow p-[50px] hide-scrollbar'>
            {/* HEADER CARDS */}
            <ExploreHeader />

            {/* FILTER & SORT COMPONENT */}
            <ExploreSearchFilter activeProjectType={activeProjectType} setActiveProjectType={setActiveProjectType}/>

            {/* LIST OF ALL TEAMS */}
            <ExploreTeams activeProjectType={activeProjectType}/>
        </div>
    )
}

export default ExplorePage