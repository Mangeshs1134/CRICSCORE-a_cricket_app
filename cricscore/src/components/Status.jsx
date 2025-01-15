import React from 'react'
import {useSelector} from 'react-redux'

const Status = () => {
    const team = useSelector((state)=> state.globalTeam)
    const inning = team.inning


    
  return ( <>{inning===1 ?
    <div className='text-[12px] text-red-600 font-semibold ml-3 mt-1'>
    {team.team1} won the toss
   </div> 
   :
    <div className='text-[12px] text-red-600 font-semibold ml-3 mt-1'>
        {team.team2} needs 56 runs in 10 balls
    </div> }
    
 </> )
}

export default Status