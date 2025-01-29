import React, { useEffect } from 'react'
import Status from './Status'
import bell from './../assets/bell.svg'
import left from './../assets/left.svg'
import right from './../assets/right.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Match } from '../Hooks/useMatchCard'
import { useDispatch, useSelector} from 'react-redux'
import { setId } from "../store/slice";




const MatchCard = ({list = false}) => {
    const dispatch = useDispatch()
    const id = useSelector((state)=> state.globalMatchId.matchId)
    
    
    
    const navigate = useNavigate()
    const {allMatch, error} = Match()
    const noOfMatches = allMatch.length
    const [matchId, setMatchId ] = useState(1)

    if (list) {
        return (
            <div className='p-2  md:flex justify-center flex-col items-center'>
                
                {allMatch.map((match)=> (
                        <div key={match.matchId} className=" bg-gray-200 fade-in p-2 py-3 flex flex-col card  border-2 border-gray-100 rounded-xl m-3 md:w-1/2"
                        onClick={()=>{
                            let id = match.id
                            dispatch(setId(match.id))
                            navigate('/matchLive')
                        }
                        }
                        >
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
                                <div className="logo flex justify-center items-center">
                                    {console.log(match.team1_logo)}
                                    {/* {match.team1_lo} */}
                                    <img className='w-[20px]' src={match.team1_logo} alt="alt" />
                                </div>
                                <div className="team1Name">
                                    {match.team1_name}
                                </div>
                            </div>
                            <div className="team1Score flex justify-between">
                                
                                {match.team1Score}-{match.team1FallenWickets} ({match.team1BallsPlayed} )
                            </div>
                        </div>
                                <div className="team1 flex  justify-between">
                                    <div className="team1Info flex justify-start gap-2">
                                        <div className="logo flex justify-center items-center">
                                            <img className='w-[20px]' src={match.team2_logo} alt="team2" />
                                        </div>
                                        <div className="team1Name">
                                            {match.team2_name}
                                        </div>
                                    </div>
                                    <div className="team1Score flex justify-between">
                                    {match.team2Score}-{match.team2FallenWickets} ({match.team2BallsPlayed})
                                    </div>
                                </div>
                                <div className='mx-2  mt-1'>
                                    
                                <Status MatchStatus={match.status} />
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
    
   
    

  return (
    <div  className='p-2  md:flex justify-center flex-col items-center'>
        
        {allMatch.map((match)=> match.id !==matchId ? null : (
                <div key={match.matchId} className=" bg-gray-200 fade-in p-2 py-3 flex flex-col card  border-2 border-gray-100 rounded-xl m-3 md:w-1/2"
                onClick={()=>{
                    let id = match.id
                    dispatch(setId(match.id))
                    navigate('/matchLive')
                }
                }
                >
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
                        <div className="logo flex justify-center items-center">
                            <img className='w-[20px]' src={match.team1_logo} alt="alt" />
                        </div>
                        <div className="team1Name">
                            {match.team1_name}
                        </div>
                    </div>
                    <div className="team1Score flex justify-between">
                        
                        {match.team1Score}-{match.team1FallenWickets} ({parseInt(Number(match.team1BallsPlayed)/6)}.{parseInt(Number(match.team1BallsPlayed)%6)})
                    </div>
                </div>
                        <div className="team1 flex  justify-between">
                            <div className="team1Info flex justify-start gap-2">
                                <div className="logo flex justify-center items-center">
                                    <img className='w-[20px]' src={match.team2_logo} alt="team2" />
                                </div>
                                <div className="team1Name">
                                    {match.team2_name}
                                </div>
                            </div>
                            <div className="team1Score flex justify-between">
                            {match.team2Score}-{match.team2FallenWickets} ({parseInt(Number(match.team2BallsPlayed)/6)}.{parseInt(Number(match.team2BallsPlayed)%6)})
                            </div>
                        </div>
                        <div className='mx-2  mt-1'>
                        <Status MatchStatus={match.status}/>
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