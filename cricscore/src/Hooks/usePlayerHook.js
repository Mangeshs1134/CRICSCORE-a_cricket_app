// Current match context 
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

let BaseUrl = 'http://127.0.0.1:8000/'



const usePlayer = () =>{
    const id = useSelector((state)=>state.globalMatchId.matchId) 
    const [team1Batters, setTeam1Batters] = useState([])
    const [team1Bowlers, setTeam1Bowlers] = useState([])
    const [team2Batters, setTeam2Batters] = useState([])
    const [team2Bowlers, setTeam2Bowlers] = useState([])
    const [scorecardError, setScorecardError] = useState(null)
    
    useEffect(()=>{
        try {
            const fetchPlayers = async ()=>{
                const [matchResponse, playerResponse] = await Promise.all([
                    fetch(`${BaseUrl}/match/${id}/`),
                    fetch(`${BaseUrl}performance/`)
                ])
                if (matchResponse.ok && playerResponse.ok) {
                    const playerData = await playerResponse.json()
                    const matchData = await matchResponse.json()

                    const team1 = matchData.team1_name
                    
                    // Getting team1 batters player
                    const team1BattersData = playerData.filter((player)=>player.get_team === team1 && player.matchPlayed === id)
                    setTeam1Batters(team1BattersData)


                    // Getting team1 bowlers player
                    const team1BowlersData = playerData.filter((player)=>player.get_team === team1 && player.matchPlayed === id && player.ballsBowled>0)
                    setTeam1Bowlers(team1BowlersData)
                    


                    const team2 = matchData.team2_name
                    
                    // Getting team1 batters player
                    const team2BattersData = playerData.filter((player)=>player.get_team === team2 && player.matchPlayed === id)
                    setTeam2Batters(team2BattersData)

                    // Getting team1 bowlers player
                    const team2BowlersData = playerData.filter((player)=>player.get_team === team2 && player.matchPlayed === id && player.ballsBowled>0)
                    setTeam2Bowlers(team2BowlersData)
                    
                    
                }

            }
            fetchPlayers()
        } catch (error) {
            setScorecardError(error.message)
            console.log(scorecardError);
            
        }
    },[])
    return {team1Batters, team1Bowlers, team2Batters, team2Bowlers, scorecardError} 
}
export const players = usePlayer