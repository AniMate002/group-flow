import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Keys } from '../../../utils/query-keys';
import { getTeamsByTextQueryService } from '../../../services/team.services';
import { Toast } from '../common/Alert/Mixin';

interface ExploteSearchFormProps {
    isLoadingAllTeams: boolean,
    isErrorAllTeams: boolean
}

const ExploteSearchForm:React.FC<ExploteSearchFormProps> = ({ isErrorAllTeams, isLoadingAllTeams }) => {
    const [textQuery, setTextQuery] = useState<string>("")
    
    // const { data: searchTeams, isLoading, isError, error, refetch } = useQuery({
    //     queryKey: [Keys.searchTeams],
    //     queryFn: () => getTeamsByTextQueryService(textQuery),
    //     enabled: false,
    // })

    if(isError){
        Toast.fire({
            text: error.message,
            icon: "error",
            showConfirmButton: false
        })
    }


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(textQuery) refetch()
    }
    return (
        <form
        onSubmit={e => handleFormSubmit(e)}
        className='ml-auto'>
            <label className='flex items-center justify-center bg-[#35363f] rounded-xl px-[10px] '>
            <IoSearchSharp className='text-xl'/>
            <input 
            value={textQuery}
            onChange={e => setTextQuery(e.target.value)}
            disabled={isLoadingAllTeams || isErrorAllTeams || isError || isLoading}
            type='text'
            placeholder='Search for Teams'
            className='bg-[#35363f] focus:outline-none py-[12px] px-[10px]'
            />
            </label>
        </form>
    )
}

export default ExploteSearchForm