import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Keys } from '../../../utils/query-keys'
import { getTeamsByProjectTypeService } from '../../../services/team.services'
import { ITeam } from '../../../types/types'
import TeamCardHome from '../common/Team/TeamCardHome'
import Loading from '../common/Suspense/Loading'

interface DynamicExploreTeamsProps {
    projectType: string
}

const DynamicExploreTeams:React.FC<DynamicExploreTeamsProps> = ({ projectType }) => {
    const { data: filteredTeams, isLoading, isError, error} = useQuery<Array<ITeam>>({
        queryKey: [Keys.filteredTeams],
        queryFn: () => getTeamsByProjectTypeService(projectType)
    })

    if(isError || error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <Loading />
    }

    const renderedTeams = filteredTeams?.map(team => <TeamCardHome key={team._id} {...team}/>)
    return (
        <div className='flex justify-between flex-wrap items-center gap-4 mt-[50px]'>
            { renderedTeams }
        </div>
    )
}

export default DynamicExploreTeams