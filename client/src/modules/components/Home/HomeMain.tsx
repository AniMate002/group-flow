import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Keys } from '../../../utils/query-keys'
import { getAllTeamsService } from '../../../services/team.services'
import { ITeam } from '../../../types/types'
import TeamCardHome from '../common/Team/TeamCardHome'
import { Toast } from '../common/Alert/Mixin'

const HomeMain:React.FC = () => {
    const { data: allTeams, isLoading, isError, error } = useQuery<Array<ITeam>>({
        queryKey: [Keys.allTeams],
        queryFn: () => getAllTeamsService(),
    })
    console.log("ALL TEAMS", allTeams);

    if(error?.message){
        Toast.fire({
            text: error.message,
            icon: "error",
            showConfirmButton: false
        })
        return <h3>Error: {error.message}</h3>
    }

    if(isLoading){
        return <span className="loading loading-infinity loading-lg text-center text-[#D4D4FF]"></span>

    }

    const renderedTeams = allTeams?.slice(0,3).map(team => <TeamCardHome key={team._id} {...team}/>)

    return (
        <div className='w-full mt-[50px]'>
            <h2 className='text-center text-3xl font-bold w-[50%] mx-auto'>Contribute to existing Projects or Create Your Own</h2>
            <div className='flex items-center justify-center w-full gap-4 mt-[30px]'>
                {renderedTeams}
            </div>
        </div>
    )
}

export default HomeMain