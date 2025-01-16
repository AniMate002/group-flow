import React, { useRef, useState } from 'react'
import { projectTypeIcons } from '../../../types/types'
import SingleFilterButton from './SingleFilterButton'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";

interface ExploreSearchFilterProps {
  activeProjectType: keyof typeof projectTypeIcons | null
  setActiveProjectType: React.Dispatch<React.SetStateAction<keyof typeof projectTypeIcons | null>>
}

const ExploreSearchFilter:React.FC<ExploreSearchFilterProps> = ({ activeProjectType, setActiveProjectType }) => {
  const [showAllFilterButtons, setShowAllFilterButtons] = useState<boolean>(false)
  const containerRef = useRef(null)
  
  console.log("ICON TYPES: ", Object.keys(projectTypeIcons).slice(0, 4))

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
      <label className='flex items-center justify-center bg-[#35363f] rounded-xl px-[10px] ml-auto'>
        <IoSearchSharp className='text-xl'/>
        <input 
        type='text'
        placeholder='Search for Teams'
        className='bg-[#35363f] focus:outline-none py-[12px] px-[10px]'
        />
      </label>
    </div>
  )
}

export default ExploreSearchFilter