// Current match context 
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

let BaseUrl = 'http://127.0.0.1:8000/match/'


const useCurrentMatch=()=>{
    const id = useSelector((state)=>state.globalMatchId.matchId)
    const reloadKey = useSelector((state)=>state.reload.reloadKey)
    const [match, setMatch] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchMatch = async () =>{
            try {
                
                const res = await fetch(`${BaseUrl}${id}/`);
                if (res.ok) {
                    const data = await res.json()
                    setMatch(data)
                }
            } catch (error) {
                setError(error.message)
            }
        };
        fetchMatch()
    },[reloadKey])
    return {match, error}
}
export const currentMatch = useCurrentMatch;