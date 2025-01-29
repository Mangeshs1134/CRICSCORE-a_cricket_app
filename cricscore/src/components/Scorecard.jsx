import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import {currentMatch} from '../Hooks/useCurrentMatch'
import {players} from '../Hooks/usePlayerHook'

const Scorecard = () => {

    const {match, error} = currentMatch()
    const {team1Batters, team2Batters, team1Bowlers, team2Bowlers} = players()
    const team = useSelector(state=> state.globalTeam)
    const [toggle, setToggle] = useState('team1')
    let batters=[]
    let bowlers=[]
    toggle === "team1" ? batters=[...team1Batters] : batters=[...team2Batters]
    toggle === "team1" ? bowlers=[...team2Bowlers] : bowlers=[...team1Bowlers]
     

  return (
    <>
    {/* toggle of team name */}

    <div className="flex h-[40px]">
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='team1'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> toggle==='team1' ? null : setToggle("team1") }
        >
            <div className='mx-2'>
            {match.team1_name}
            </div>
            <div>
                {match.team1Score}-{match.team1FallenWickets}
            </div>
        </div>
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='team2'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> toggle==='team2' ? null : setToggle("team2") }
        >
             <div className='mx-2'>
            {match.team2_name}
            </div>
            <div>
            {match.team2Score}-{match.team2FallenWickets}
            </div>
        </div>
    </div>
    {/* Batters ScoreCard */}
    <div className="py-0.5 bg-gray-400  flex text-[10px] text-gray-600 px-3   border border-gray-400">
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
{/* looping for scorcard */}
    {batters.map((player)=> player.ballsPlayed > 0 ? (
        <div  className=" border flex text-[12px] text-gray-600 px-3 py-1   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.get_name}
            <div className='text-gray-600 text-[10px]'>
            {player.out && player.caught ? `c ${player.caughtby}`:'' }
            {player.out  ? ` b ${player.bowledby}`:'' }
            </div>
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">{player.runScored}</div>
            <div className="w-1/5">{player.ballsPlayed}</div>
            <div className="w-1/5">{player.fours}</div>
            <div className="w-1/5">{player.sixes}</div>
            <div className="w-1/5">{parseInt(player.runScored/player.ballsPlayed*100)}</div>
        </div>
    </div>
    ) : null
)}
    {/* who did not batted */}
    {batters.map((player)=> player.ballsPlayed > 0 ? null : (
        <div className=" border flex text-[12px] text-gray-600 px-3 py-1   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.get_name}
            <div className='text-gray-600 text-[10px]'>
            {player.out && player.caught ? `c ${player.caughtby}`:'' }
            {player.out  ? ` b ${player.bowledby}`:'' }
            </div>
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">DNB</div>
            {/* <div className="w-1/5">{player.ballsPlayed}</div>
            <div className="w-1/5">{player.fours}</div>
            <div className="w-1/5">{player.sixes}</div>
            <div className="w-1/5">{player.runScored/player.ballsPlayed*100}</div> */}
        </div>
    </div>
    ) 
)}

    {/* extras */}
    <div className="extras flex border h-[30px] border-gray-400">
        <div className="text w-3/5 px-3 flex justify-start items-center">
            Extras
        </div>
        <div className="count w-2/5 flex px-3  justify-end items-center">
            {toggle==="team1"? match.team1extras : match.team2extras}
        </div>
    </div>
 {/* Bowlers ScoreCard */}
 <div className="py-0.5 bg-gray-400  flex text-[10px] text-gray-600 px-3   border border-gray-400">
        <div className=' w-2/5'>
            Bowlers
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">O</div>
            <div className="w-1/5">M</div>
            <div className="w-1/5">R</div>
            <div className="w-1/5">W</div>
            <div className="w-1/5">ER</div>
        </div>
    </div>
    {/* looping for bowler */}
    {bowlers.map((player)=>(
        <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.get_name}
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">{parseInt(player.ballsBowled/6)}.{player.ballsBowled%6}</div>
            <div className="w-1/5">{player.maidenBowled}</div>
            <div className="w-1/5">{player.runsGiven}</div>
            <div className="w-1/5 font-semibold text-black">{player.wicketsTaken}</div>
            <div className="w-1/5">{player.runsGiven/player.ballsBowled}</div>
        </div>
    </div>
    ))}
    
   
    </>
  )
}

export default Scorecard