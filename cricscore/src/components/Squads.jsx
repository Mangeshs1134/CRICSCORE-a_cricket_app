import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'

const Squads = () => {
    const team = useSelector(state=> state.globalTeam)
        const [toggle, setToggle] = useState('team1')
    const players = [
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 ,
            role : 'Batsman'
        },
        {
            playerPicture : 'Pic',
            name : 'Mangesh',
            ranking : 1 , 
            role : 'Batsman'
        },
    ]
   
    
  return (
    <>
    {/* toggle of team name */}
    <div className="flex h-[40px]">
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='team1'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> toggle==='team1' ? null : setToggle("team1") }
        >
            <div className='mx-2'>
            {team.team1}
            </div>
           
        </div>
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='team2'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> toggle==='team2' ? null : setToggle("team2") }
        >
             <div className='mx-2'>
            {team.team2}
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
        <div className="players my-1 h-[30px] text-[12px] flex justify-between px-1">
        <div className="picture w-1/5 flex justify-center items-center ">
            <img className='rounded-2xl w-[30px] h-[30px]' src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/15/full/1647365891-7103.jpg" alt="" />
        </div>
        <div className="name w-2/5 justify-start items-center">
            {player.name}
        </div>
        <div className="role w-1/5 flex justify-center items-center">
            {player.role}
        </div>
        <div className="ranking w-1/5 flex justify-center items-center">
            {player.ranking}
        </div>
    </div>
    ))}
    </>
  )
}

export default Squads