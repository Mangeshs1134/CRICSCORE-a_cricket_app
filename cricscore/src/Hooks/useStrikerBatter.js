// Current match context 
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

let BaseUrl = 'http://127.0.0.1:8000/'



const useStrikerBatter=()=>{
    const id = useSelector((state)=>state.globalMatchId.matchId)
    const reloadKey = useSelector((state)=>state.reload.reloadKey)
    const [strikerBatter, setStrikerBatter] = useState([])
    const [nonStrikerBatter, setNonStrikerBatter] = useState([])
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
                    
                    const strikeBatter = playerData.filter((player)=>player.get_team===battingTeam && player.isOut === "onStrike")

                    const nonStrikeBatter = playerData.filter((player)=>player.get_team===battingTeam && player.isOut === "nonStrike")
                    
                    setStrikerBatter(strikeBatter) //update the state with filtered batter
                    setNonStrikerBatter(nonStrikeBatter) //update the state with filtered batter
                    
                    
                    
                }
                
            } catch (error) {
                setError(err.message); // Set the error state
                console.error(err);
            }
        }
        fetchBatter()
    },[id, reloadKey])
    return {strikerBatter, nonStrikerBatter, error} 
}
export const onStrike = useStrikerBatter