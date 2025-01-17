import React, { useRef, useState } from 'react'
import { projectTypeIcons } from '../../../types/types'
import SingleFilterButton from './SingleFilterButton'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdExpandMore } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import { Keys } from '../../../utils/query-keys';
import ExploteSearchForm from './ExploteSearchForm';

interface ExploreSearchFilterProps {
  activeProjectType: keyof typeof projectTypeIcons | null
  setActiveProjectType: React.Dispatch<React.SetStateAction<keyof typeof projectTypeIcons | null>>
}

const ExploreSearchFilter:React.FC<ExploreSearchFilterProps> = ({ activeProjectType, setActiveProjectType }) => {
  const [showAllFilterButtons, setShowAllFilterButtons] = useState<boolean>(false)
  const containerRef = useRef(null)

  const { isLoading: isLoadingAllTeams, isError: isErrorAllTeams } = useQuery({queryKey: [Keys.allTeams]})
  

  const renderedIcons = (Object.keys(projectTypeIcons) as Array<keyof typeof projectTypeIcons>)
  .map((iconType, index) => <SingleFilterButton 
    onClick={() => setActiveProjectType(iconType)}
    active={activeProjectType === iconType}
    key={index} 
    icon={projectTypeIcons[iconType]}
    >
      {iconType}
    </SingleFilterButton>)

  const handleExpandFilterButtonsContainer = () => setShowAllFilterButtons(prev => !prev)

  return (
    <div className='mt-[50px] w-full flex items-start'>

      {/* FILTER BY PROJECT TYPE */}
      <div 
      ref={containerRef}
      className={`flex items-center gap-2 w-1/2 flex-wrap overflow-hidden transition-all duration-[0.2s] ${showAllFilterButtons ? "h-auto" : "h-[50px]"}`}>
        {/* DEFAULT SORT */}
        <SingleFilterButton 
        onClick={() => setActiveProjectType(null)}
        active={activeProjectType === null} 
        icon={HiOutlineSquares2X2}
        >Lobby</SingleFilterButton>
        {/* OTHER SORT */}
        { renderedIcons}
      </div>
      {/* BUTTON TO EXPAND FILTER BUTTONS CONTAINER */}
      <button 
      onClick={handleExpandFilterButtonsContainer}
      className='mt-[10px]'>
        <MdExpandMore className={`text-xl transition-all duration-[0.2s] ${showAllFilterButtons ? "rotate-[180deg]" : ""}`}/>
      </button>


      {/* SEARCH INPUT */}
      <ExploteSearchForm isLoadingAllTeams={isLoadingAllTeams} isErrorAllTeams={isErrorAllTeams}/>
    </div>
  )
}

export default ExploreSearchFilter