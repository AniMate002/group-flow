import React from 'react'
import { ITeam, projectTypeIcons } from '../../../types/types'
import ExploreProjectTypeContainer from './ExploreProjectTypeContainer'
import { useQuery } from '@tanstack/react-query'
import { Keys } from '../../../utils/query-keys'
import { Toast } from '../common/Alert/Mixin'

const ExploreTeams:React.FC = () => {
    const types = Object.keys(projectTypeIcons) as  Array<keyof typeof projectTypeIcons>

    const { data: allTeams, isError, error, isLoading } = useQuery<Array<ITeam>>({queryKey: [Keys.allTeams]})

    if(error?.message || isError){
        Toast.fire({
            text: error.message,
            icon: "error",
            showConfirmButton: false
        })
        return <h3>Error: {error.message}</h3>
    }

    if(isLoading){
        return (
            <div className='flex items-center justify-center w-full gap-4 mt-[30px]'>
                <p className='text-[#FDF27B] text-2xl font-semibold'>Loading...</p>
                <span className="loading loading-infinity loading-lg text-center text-[#D4D4FF]"></span>
            </div>
        )

    }

    const renderedTypeContainers = types.map((type, index) => <ExploreProjectTypeContainer key={index} type={type} teams={allTeams?.filter(team => team.project_type === type) || []}/>)

    return (
        <div className='w-full flex flex-col gap-10 mt-[50px]'>
            { renderedTypeContainers }
        </div>
    )
}

export default ExploreTeams