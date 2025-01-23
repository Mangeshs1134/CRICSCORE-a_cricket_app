import React from 'react'
import { useSelector } from 'react-redux'
import {Match} from '../Hooks/useMatchCard'





const Info = () => {
    const {allMatch, error} = Match()
    const id = useSelector((state)=>state.globalMatchId.matchId) 
    
  return (
    <div>
        {allMatch.map((match)=> match.id===id?  <div>
        <div className="table text-[12px] md:text-[16px] flex p-3 w-full border-2 border-gray-200 ">
            <div className="row flex ">
                <div className="col w-1/2">
                    Match
                </div>
                <div className="col w-1/2">
                    {match.matchTitle}
                </div>
            </div>
        </div>
        <div className="table text-[12px] md:text-[16px] flex p-3 w-full border-2 border-gray-200 ">
            <div className="row flex ">
                <div className="col w-1/2">
                    Stadium
                </div>
                <div className="col w-1/2">
                    {match.venue}
                </div>
            </div>
        </div>
        <div className="table text-[12px] md:text-[16px] flex p-3 w-full border-2 border-gray-200 ">
            <div className="row flex ">
                <div className="col w-1/2">
                    Tournament
                </div>
                <div className="col w-1/2">
                    {match.matchTitle}
                </div>
            </div>
        </div>
        <div className="table text-[12px] md:text-[16px] flex p-3 w-full border-2 border-gray-200 ">
            <div className="row flex ">
                <div className="col w-1/2">
                    Umpire
                </div>
                <div className="col w-1/2">
                    {match.umpire}
                </div>
            </div>
        </div>
        <div className="table text-[12px] md:text-[16px] flex p-3 w-full border-2 border-gray-200 ">
            <div className="row flex ">
                <div className="col w-1/2">
                    Date
                </div>
                <div className="col w-1/2">
                    {match.date}
                </div>
            </div>
        </div>
        <div className="table text-[12px] md:text-[16px] flex p-3 w-full border-2 border-gray-200 ">
            <div className="row flex ">
                <div className="col w-1/2">
                    Toss
                </div>
                <div className="col w-1/2">
                    {match.toss}
                </div>
            </div>
        </div>

        </div>
        : null
        
        
        )}
    </div>
  )
}

export default Info