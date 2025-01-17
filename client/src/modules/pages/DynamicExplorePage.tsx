import React from 'react'
import { Navigate, useParams } from 'react-router'
import { projectTypeIcons } from '../../types/types'
import DynamicExploreHeader from '../components/DynamicExplore/DynamicExploreHeader'
import DynamicExploreTeams from '../components/DynamicExplore/DynamicExploreTeams'

const DynamicExplorePage:React.FC = () => {
    const { projectType } = useParams()

    if(!projectType || !(projectType in projectTypeIcons))
    {
        return <Navigate to={"/notfound"}/>
    }

    return (
        <div className='flex-grow p-[50px] hide-scrollbar'>
            {/* HEADER */}
            <DynamicExploreHeader projectType={projectType}/>

            {/* RENDERED FILTERED TEAMS */}
            <DynamicExploreTeams projectType={projectType}/>
        </div>
    )
}

export default DynamicExplorePage