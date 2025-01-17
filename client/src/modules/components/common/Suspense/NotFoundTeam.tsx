import React, { useRef } from 'react'

interface NotFoundTeamProps {
    textQuery: string
}

const NotFoundTeam:React.FC<NotFoundTeamProps> = ({ textQuery }) => {
    const initialTextQuery = useRef(textQuery).current;
  return (
    <div className='w-full text-center text-xl'>
        Nothing found for the request: '{ initialTextQuery }'
    </div>
  )
}

export default NotFoundTeam