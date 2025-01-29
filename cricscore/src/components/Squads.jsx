import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import {currentMatch} from '../Hooks/useCurrentMatch'
import {players as teamPlayers} from '../Hooks/usePlayerHook'

const Squads = () => {
    const {match, error} = currentMatch()
    const {team1Batters, team2Batters, team1Bowlers, team2Bowlers} = teamPlayers()
    const team = useSelector(state=> state.globalTeam)
    const [toggle, setToggle] = useState('team1')
    let players = []

    toggle === "team1" ? players=[...team1Batters] : players=[...team2Batters]
   
    
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
           
        </div>
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='team2'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> toggle==='team2' ? null : setToggle("team2") }
        >
             <div className='mx-2'>
            {match.team2_name}
            </div>
        </div>
    </div>
    {/* player  roles declarations'*/}
    <div className="players my-1 h-[30px] text-[10px] flex justify-between px-3">
        <div className="picture w-1/5 flex justify-start items-center">
            
        </div>
        <div className="name w-2/5 flex justify-start items-center">
            Name
        </div>
        <div className="role w-1/5 flex justify-center items-center">
            Role
        </div>
        <div className="ranking w-1/5 flex justify-center items-center">
            ICC 
        </div>
    </div>
    {/* team player looping */}
    {players.map((player)=>(
        <div key={player.name} className="players my-1 h-[30px] text-[12px] flex justify-between px-1">
        <div className="picture w-1/5 flex justify-center items-center ">
            <img className='rounded-2xl max-w-[30px] max-h-[30px]' src={player.get_image} alt="" />
        </div>
        <div className="name w-2/5 justify-center items-center">
            {player.get_name}
        </div>
        <div className="role w-1/5 flex justify-center items-center">
            {player.get_role==='bat'? <span className=''>🏏</span>  : null}
            {player.get_role==='ball'? <span>⚾</span>  : null}
            {player.get_role==='allround'? <span>🏏⚾</span>  : null}
            {player.get_role==='wicketkeepar'? <span>🧤</span>  : null}
        </div>
        <div className="ranking w-1/5 flex justify-center items-center">
            #{(player.get_ranking)}
        </div>
    </div>
    ))}
    </>
  )
}

export default Squads