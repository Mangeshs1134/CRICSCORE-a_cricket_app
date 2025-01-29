// Current match context 
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import {onStrike } from './useStrikerBatter'
import {onBowling } from './useStrikeBowler'

let BaseUrl = 'http://127.0.0.1:8000/'

const useCommentry=()=>{
    const id = useSelector((state)=>state.globalMatchId.matchId)
    const reloadKey = useSelector((state)=>state.reload.reloadKey)
    const {strikerBatter} = onStrike()
    const {strikeBowler} = onBowling()
    const [commentry, setCommentry] = useState([])
    const [commentryError, setCommentryError] = useState()

    useEffect(()=>{
        try {
            const fetchCommentry = async()=>{
                const commentryResponse = await fetch(`${BaseUrl}commentry/`)
                
                if (commentryResponse.ok) {
                    const commentryData = await commentryResponse.json()
                    setCommentry(commentryData)
                    
                }
            }
            fetchCommentry()
        } catch (error) {
            setCommentryError(error.message)
            console.log(commentryError);
            
        }
    },[reloadKey])
    return {strikerBatter, strikeBowler, commentry, commentryError}
}
export const commentry = useCommentry