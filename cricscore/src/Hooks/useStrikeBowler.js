// Current match context 
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

let BaseUrl = 'http://127.0.0.1:8000/'



const useStrikerBowler=()=>{
    const id = useSelector((state)=>state.globalMatchId.matchId)
    const reloadKey = useSelector((state)=>state.reload.reloadKey)
    const [strikeBowler, setStrikeBowler] = useState([])
    const [error, setError] = useState(null)


    
    useEffect(()=>{
        const fetchBatter = async () =>{
            try {
                const [matchResponse, playerResponse] = await Promise.all([
                    fetch(`${BaseUrl}/match/${id}/`),
                    fetch(`${BaseUrl}performance/`)
                ])
                
                if (matchResponse.ok && playerResponse.ok) {
                    const playerData = await playerResponse.json();
                    const matchData = await matchResponse.json();

                    // getting batting team from current match
                    const battingTeam = matchData.get_batting;
                    
                    const bowler = playerData.filter((player)=>player.get_team!==battingTeam && player.isBowling === "yes")

                    
                    
                    setStrikeBowler(bowler) //update the state with filtered batter
                    // console.log(strikerBatter);
                   
                    
                }
                
            } catch (error) {
                setError(err.message); // Set the error state
                console.error(err);
            }
        }
        fetchBatter()
    },[id, reloadKey])
    return {strikeBowler, error} 
}
export const onBowling = useStrikerBowler