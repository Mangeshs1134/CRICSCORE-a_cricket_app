import React, { useEffect } from 'react'
import Status from './Status'
import bell from './../assets/bell.svg'
import left from './../assets/left.svg'
import right from './../assets/right.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'




const MatchCard = () => {
    const noOfMatches = 3
    const [matchId, setMatchId ] = useState(3)
    useEffect(()=>{
    },[matchId])

    const matches = [
        {
            matchId : 1,
            matchTitle: "Ind Tour of Australia 2023",
            team1 : useSelector((state)=> state.globalTeam.team1),
            team2 : useSelector((state)=> state.globalTeam.team2),
            team1Score : 290,
            team1FallenWickets : 3,
            team1OverPlayed : 10,
            team1OversBowled : 20,
            team2Score : 290,
            team2FallenWickets : 3,
            team2OverPlayed : 10,
            team2OversBowled : 20,
        },
        {
            matchId : 2,
            matchTitle: "Ind Tour of Australia 2023",
            team1 : useSelector((state)=> state.globalTeam.team1),
            team2 : useSelector((state)=> state.globalTeam.team2),
            team1Score : 290,
            team1FallenWickets : 3,
            team1OverPlayed : 10,
            team1OversBowled : 20,
            team2Score : 290,
            team2FallenWickets : 3,
            team2OverPlayed : 10,
            team2OversBowled : 20,
        },
        {
            matchId : 3,
            matchTitle: "Ind Tour of Australia 2023",
            team1 : useSelector((state)=> state.globalTeam.team1),
            team2 : useSelector((state)=> state.globalTeam.team2),
            team1Score : 290,
            team1FallenWickets : 3,
            team1OverPlayed : 10,
            team1OversBowled : 20,
            team2Score : 290,
            team2FallenWickets : 3,
            team2OverPlayed : 10,
            team2OversBowled : 20,
        },
    ]
    const match =  {
        matchId : 1,
        matchTitle: "Ind Tour of Australia 2023",
        team1 : useSelector((state)=> state.globalTeam.team1),
        team2 : useSelector((state)=> state.globalTeam.team2),
        team1Logo :'O',
        team2Logo :'O',
        team1Score : 290,
        team1FallenWickets : 3,
        team1OverPlayed : 10,
        team2Score : 290,
        team2FallenWickets : 3,
        team2OverPlayed : 10,
    }

  return (
    <div className='p-2'>

        {matches.map((match)=> match.matchId !==matchId ? null : (
                <div key={match.matchId} className=" bg-gray-200 fade-in p-2 flex flex-col card  border-2 border-gray-100 rounded-xl m-3">
              <div className="header flex justify-between mx-3 w-full text-[10px] ">
                    <div className="title w-3/5 flex justify-start items-center">
                        {match.matchTitle} {match.matchId}
                    </div>
                    <div className="notify w-1/5 flex justify-center items-center">
                        <img className='w-3' alt='logo' src={bell}/>
                    </div>
                </div>
                <div className="team1 flex  justify-between">
                    <div className="team1Info flex justify-start gap-2">
                        <div className="logo">
                            {match.team1Logo}
                        </div>
                        <div className="team1Name">
                            {match.team1}
                        </div>
                    </div>
                    <div className="team1Score">
                        
                        {match.team1Score}-{match.team1OverPlayed} ({match.team1FallenWickets})
                    </div>
                </div>
                        <div className="team1 flex  justify-between">
                            <div className="team1Info flex justify-start gap-2">
                                <div className="logo">
                                    {match.team2Logo}
                                </div>
                                <div className="team1Name">
                                    {match.team2}
                                </div>
                            </div>
                            <div className="team1Score">
                            {match.team2Score}-{match.team2OverPlayed} ({match.team2FallenWickets})
                            </div>
                        </div>
                        <div className='mx-2  mt-1'>
                        <Status/>
                        </div>
            </div>
        ))} 

    <div className="matchToggle flex gap-4 justify-center items-center h-[20px] w-full ">
        <div className="prev"
           onClick={()=>{
            if( matchId < noOfMatches+1  && 1 ){
                setMatchId((prev)=> prev-1)    
            } 
            if(matchId === 1){
                setMatchId(noOfMatches)
            }
        }}
        >
            <img src={left} className='bg-gray-600 rounded-xl w-5 p-1 border border-gray-500' alt="" />
        </div>
        <div className="next"
         onClick={()=>{
             if(matchId>0 && matchId < noOfMatches+1){
                 setMatchId((prev)=> prev+1)    
                } 
                if(matchId == noOfMatches){
                    setMatchId(1)
                }
            }}
        >
            <img src={right} className='bg-gray-600 rounded-xl w-5 p-1 border border-gray-500' alt="right" />
        </div>
    </div>

    </div>

  )
}

export default MatchCard