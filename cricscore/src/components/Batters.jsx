import React from 'react'
import { onStrike } from '../Hooks/useStrikerBatter'


const Batters = () => {
    const {strikerBatter, nonStrikerBatter, error} = onStrike()
    
    
  return (
    <>
    <div className="my-1 flex text-[10px] text-gray-600 px-3 py-0.5 md:py-1  border border-gray-400">
        <div className=' w-2/5'>
            Batter
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">R</div>
            <div className="w-1/5">B</div>
            <div className="w-1/5">4s</div>
            <div className="w-1/5">6s</div>
            <div className="w-1/5">SR</div>
        </div>
    </div>
    {[...strikerBatter].map((player)=>(
        <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5 md:py-1   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.get_name}
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">{player.runScored}</div>
            <div className="w-1/5">{player.ballsPlayed}</div>
            <div className="w-1/5">{player.fours}</div>
            <div className="w-1/5">{player.sixes}</div>
            <div className="w-1/5">{player.ballsPlayed===0 ? null : parseInt(player.runScored/player.ballsPlayed*100)}</div>
        </div>
    </div>
    ))}


    {[...nonStrikerBatter].map((player)=>(
        <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5 md:py-1   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.get_name}
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">{player.runScored}</div>
            <div className="w-1/5">{player.ballsPlayed}</div>
            <div className="w-1/5">{player.fours}</div>
            <div className="w-1/5">{player.sixes}</div>
            <div className="w-1/5">{player.ballsPlayed ===0 ? null :  parseInt(player.runScored/player.ballsPlayed*100)}</div>
        </div>
    </div>
    ))}
  
    </>
  )
}

export default Batters