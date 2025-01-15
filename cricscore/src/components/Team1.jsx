import React from 'react'
import {useSelector} from 'react-redux'

const Team1 = () => {
    const team = useSelector((state)=>state.globalTeam)
    const inning = team.inning
    let RRR = 9.9
  return (
    <>
    <div className="top text-gray-900  flex justify-between">
        <div className="team1 flex justify-start px-3 mt-1  text-[18px] font-semibold items-center w-2/4 ">
            {team.team1}
        </div>
        <div className="teamTotal text-[14px] flex justify-center items-center w-1/4">
            {inning===1? null :  289-3}
           
        </div>
        <div className="target text-[14px] flex justify-center items-center w-1/4">
        {inning===1? null : `${`RRR : ${RRR}`}` }
        </div>
    </div>
    </>
  )
}

export default Team1