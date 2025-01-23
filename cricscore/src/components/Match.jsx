import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { toggleMenu } from '../store/slice'

const Match = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const menu = useSelector((state)=>state.globalMenu.menu)
    const team = useSelector((state)=>state.globalTeam)
  return (
    <>
   
  <div className="match flex justify-between fixed top-12 w-[100%] md:w-4/5 px-2 pb-0 text-[12px] md:text-[14px] bg-blue-500 overflow-hidden ">
    <div className={`matchTitle text-[10px] md:text-[12px] gap-1 pb-2  w-[78px] md:w-[100px] h-[25px] flex  justify-center items-center rounded-sm text-white
    ${menu==='live'? 'border-b-2' : null }`}
    onClick={()=> {dispatch(toggleMenu('live')); navigate('/matchLive')}}
    >
      {team.team1} vs {team.team2}
      <div className='bg-red-500 text-[8px] px-1 rounded h-[9px'>
        Live
      </div>
    </div>
    <div 
    className= {`matchInfo ${menu==='info'? 'border-b-2' : null }  w-[50px] border-opacity-5  h-[25px] flex justify-center items-center text-gray-200`}
    onClick={()=> {dispatch(toggleMenu('info')); navigate('/matchInfo')}}
    >
      INFO
    </div>
    <div className={`scorecard ${menu==='scorecard'? 'border-b-2' : null }  w-[85px] h-[25px] flex justify-center items-center  text-gray-200`}
    onClick={()=> {dispatch(toggleMenu('scorecard')); navigate('/matchScorecard')}}
    >
      SCORECARD
    </div>
    <div className={`sqauad ${menu==='squads'? 'border-b-2' : null }   w-[65px] h-[25px] flex justify-center items-center  text-gray-200`}
    onClick={()=> {dispatch(toggleMenu('squads')); navigate('/matchSquads')}}
    >
      SQUADS
    </div>
  </div>
  <div className="mt-16 p-1"></div>
  </>
  )
}

export default Match