import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'

const HomePage: React.FC = () => {
  return (
    <div className='flex-grow p-[50px] min-h-screen max-h-screen overflow-y-scroll'>
      {/* HEADER */}
      <HomeHeader />

      {/* MAIN */}
      <HomeMain />
    </div>
  )
}

export default HomePage