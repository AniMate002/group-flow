import React, { useState } from 'react'
import ExploreHeader from '../components/Explore/ExploreHeader'
import ExploreSearchFilter from '../components/Explore/ExploreSearchFilter'
import { projectTypeIcons } from '../../types/types'


const ExplorePage:React.FC = () => {
    const [activeProjectType, setActiveProjectType] = useState<keyof typeof projectTypeIcons | null>(null)
    
    return (
        <div className='flex-grow p-[50px]'>
            {/* HEADER CARDS */}
            <ExploreHeader />

            {/* FILTER & SORT COMPONENT */}
            <ExploreSearchFilter activeProjectType={activeProjectType} setActiveProjectType={setActiveProjectType}/>
        </div>
    )
}

export default ExplorePage