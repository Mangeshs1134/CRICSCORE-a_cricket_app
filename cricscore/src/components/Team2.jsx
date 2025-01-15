import React from 'react'
import {useSelector} from 'react-redux'

const Team2 = () => {
    const team = useSelector((state)=>state.globalTeam)
  return (
    <>
    <div className="text-gray-900  flex justify-between">
        <div className="team1 flex justify-start px-3 mt-1  text-[18px] font-semibold items-center w-2/3 ">
            {team.team2}
        </div>
        <div className="team2score flex justify-center items-center w-1/3">
            <div className="score  font-bold">
                200-3
            </div>
            <div className="overs mx-1">
                (7.2)
            </div>
        </div>
    </div>
    </>
  )
}

export default Team2