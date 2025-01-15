import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { toggleMenu } from '../store/slice'

const Match = () => {
    const dispatch = useDispatch()
    const menu = useSelector((state)=>state.globalMenu.menu)
    const team = useSelector((state)=>state.globalTeam)
  return (
    <>
   
  <div className="match flex justify-between fixed top-12 w-full px-2 pb-0 text-[12px] bg-blue-500 overflow-hidden ">
    <div className='matchTitle text-[16px]  pb-2  w-[78px] h-[25px] flex justify-center items-center rounded-sm text-white'>
      {team.team1} vs {team.team2}
    </div>
    <div 
    className= {`matchInfo ${menu==='info'? 'border-b-2' : null }  w-[50px] border-opacity-5  h-[25px] flex justify-center items-center text-gray-200`}
    onClick={()=> dispatch(toggleMenu('info'))}
    >
      INFO
    </div>
    <div className={`scorecard ${menu==='scorecard'? 'border-b-2' : null }  w-[85px] h-[25px] flex justify-center items-center  text-gray-200`}
    onClick={()=> dispatch(toggleMenu('scorecard'))}
    >
      SCORECARD
    </div>
    <div className={`sqauad ${menu==='squads'? 'border-b-2' : null }   w-[65px] h-[25px] flex justify-center items-center  text-gray-200`}
    onClick={()=> dispatch(toggleMenu('squads'))}
    >
      SQUADS
    </div>
  </div>
  <div className="mt-16 p-1"></div>
  </>
  )
}

export default Match