import React from 'react'
import ShipImage from "../../../assets/images/ship-explore.jpg"
import { Keys } from '../../../utils/query-keys'
import { useQuery } from '@tanstack/react-query'
import { ITeam } from '../../../types/types'

interface DynamicExploreHeaderProps {
    projectType: string
}

const DynamicExploreHeader:React.FC<DynamicExploreHeaderProps> = ({ projectType }) => {
    const { data: filteredTeams, isLoading, isError} = useQuery<Array<ITeam>>({queryKey: [Keys.filteredTeams]})
    
    return (
        <div className='w-full flex justify-center items-center relative overflow-hidden rounded-[18px] h-[200px] flex-col'>
            <img src={ShipImage} className='min-w-full min-h-full absolute'/>
            <p className='relative uppercase text-white font-bold tracking-widest text-3xl'>{projectType}</p>
            <p className='relative uppercase  font-bold tracking-widest text-xl'>
                {
                    isError
                    ?
                    "Error"
                    :
                    isLoading
                    ?
                    "Loading"
                    :
                    filteredTeams?.length + " Teams"
                }
            </p>
        </div>
    )
}

export default DynamicExploreHeader