import React from 'react'
import { useSelector } from "react-redux";
import { currentMatch } from '../Hooks/useCurrentMatch';
import { Batters, Bowler, Commentary, Header, Match, Status, Team1, Team2 } from '../components'

const MatchLive = () => {

  const id = useSelector((state)=>state.globalMatchId.matchId)
  const {match, error} = currentMatch()
  const MatchStatus = match.status

  return (
    <>
        <Header/>
        <Match/>
        <Team1/>
        <Team2/>
        <Status MatchStatus={MatchStatus}/>
        <Batters/>
        <Bowler/>
        <Commentary/>
    </>
  )
}

export default MatchLive