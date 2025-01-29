import React from 'react'
import {useSelector} from'react-redux'
import { onBowling } from '../Hooks/useStrikeBowler'

const Bowler = () => {
    const {strikeBowler, error} = onBowling()
    const matchId = useSelector((state)=>state.globalMatchId.matchId)

  return (
    <>
    <div className="my-1 flex text-[10px] text-gray-600 px-3 py-0.5 md:py-1   border border-gray-400">
        <div className=' w-2/5'>
            Bowler
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">O</div>
            <div className="w-1/5">M</div>
            <div className="w-1/5">R</div>
            <div className="w-1/5">W</div>
            <div className="w-1/5">ER</div>
        </div>
    </div>
    {[...strikeBowler].map((player)=>player.matchPlayed===matchId ? (
        <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5  md:py-1 ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.get_name}
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">{parseInt(player.ballsBowled/6)}{player.ballsBowled%6? `.${player.ballsBowled%6}`:null}
            </div>
            <div className="w-1/5">{player.maidenBowled}</div>
            <div className="w-1/5">{player.runsGiven}</div>
            <div className="w-1/5">{player.wicketsTaken}</div>
            <div className="w-1/5">{player.runsGiven/player.ballsBowled*6}</div>
        </div>
    </div>
    )
    : null
)}
    
    
    </>
  )
}

export default Bowler