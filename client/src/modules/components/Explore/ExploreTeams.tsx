import React from 'react'
import { ITeam, projectTypeIcons } from '../../../types/types'
import ExploreProjectTypeContainer from './ExploreProjectTypeContainer'
import { useQuery } from '@tanstack/react-query'
import { Keys } from '../../../utils/query-keys'
import { Toast } from '../common/Alert/Mixin'
import Loading from '../common/Suspense/Loading'
import TeamCardHome from '../common/Team/TeamCardHome'
import NotFoundTeam from '../common/Suspense/NotFoundTeam'

interface ExploreTeamsProps {
    activeProjectType: keyof typeof projectTypeIcons | null,
    textQuery: string
}

const ExploreTeams:React.FC<ExploreTeamsProps> = ({ activeProjectType, textQuery }) => {
    const types = Object.keys(projectTypeIcons) as  Array<keyof typeof projectTypeIcons>

    const { data: allTeams, isError: isErrorAllTeams, error: errorAllTeams, isLoading: isLoadingAllTeams } = useQuery<Array<ITeam>>({queryKey: [Keys.allTeams]})
    const { data: searchTeams, isLoading: isLoadingSearchTeams, isError: isErrorSearchTeams, error: errorSearchTeams } = useQuery<Array<ITeam>>({queryKey: [Keys.searchTeams], enabled: false})
    

    if(errorAllTeams?.message || isErrorAllTeams || errorSearchTeams?.message || isErrorSearchTeams){
        Toast.fire({
            text: errorAllTeams?.message || errorSearchTeams?.message,
            icon: "error",
            showConfirmButton: false
        })
        return <h3>Error: {errorAllTeams?.message || errorSearchTeams?.message}</h3>
    }

    if(isLoadingAllTeams || isLoadingSearchTeams){
        return <Loading />

    }

    const renderedSearchTeams = searchTeams?.map(team => <TeamCardHome key={team._id} {...team}/>)
    const renderedTypeContainers = types.filter(type => activeProjectType === null ? type : type === activeProjectType)
    .map((type, index) => <ExploreProjectTypeContainer key={index} type={type} teams={allTeams?.filter(team => team.project_type === type).slice(0,3) || []}/>)

    return (
        <div className={`w-full flex ${!searchTeams ? "flex-col" : "flex-row flex-wrap"} gap-6 mt-[50px]`}>
            {
                !searchTeams
                ?
                renderedTypeContainers
                :
                renderedSearchTeams?.length === 0
                ?
                <NotFoundTeam textQuery={textQuery}/>
                :
                renderedSearchTeams
            }
        </div>
    )
}

export default ExploreTeams