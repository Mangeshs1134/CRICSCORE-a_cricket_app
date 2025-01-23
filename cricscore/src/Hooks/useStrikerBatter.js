// Current match context 
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

let BaseUrl = 'http://127.0.0.1:8000/'



const useStrikerBatter=()=>{
    const id = useSelector((state)=>state.globalMatchId.matchId)
    const battingTeamId = 1
    const [batters, setBatters] = useState([])
    const [error, setError] = useState(null)
    let whoIsBatting = null

    
    useEffect(()=>{
        const fetchBatter = async () =>{
            try {
                let response = await fetch(`${BaseUrl}match/${id}`)
                const res = await fetch(`${BaseUrl}performance/`)
                // console.log(await response.json());
                
                if (res.ok && response.ok) {
                    const playerData = await res.json()
                    const matchData = await response.json()
                    const battingTeam = matchData.get_batting
                    console.log(battingTeam);
                    
                    
                    //   data.map((player)=>console.log(player.get_team))
                }
                
            } catch (error) {
                
            }
        }
        fetchBatter()
    },[])
    return {batters, error} 
}
export const strikerBatter = useStrikerBatter