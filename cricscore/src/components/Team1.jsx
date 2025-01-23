import React from 'react'
import {useSelector} from 'react-redux'
import { currentMatch } from '../Hooks/useCurrentMatch'

const Team1 = () => {
    const {match, error} = currentMatch()
 
  return (
    <>
    <div className="text-gray-900  flex justify-between">
        <div className="team1 flex justify-start px-3 mt-1  text-[18px] font-semibold items-center w-2/3 ">
            {match.team1_name}
        </div>
        <div className="team2score flex justify-center items-center w-1/3">
            <div className="score  font-bold">
                {match.team1Score}-{match.team1FallenWickets}
            </div>
            <div className="overs mx-1">
                ({parseInt(Number(match.team1BallsPlayed)/6)}.{parseInt(Number(match.team1BallsPlayed)%6)})
            </div>
        </div>
    </div>
    </>
  )
}

export default Team1