import React from 'react'
import { useSelector } from "react-redux";
import { Batters, Bowler, Commentary, Header, Match, Status, Team1, Team2 } from '../components'

const MatchLive = () => {

  const id = useSelector((state)=>state.globalMatchId.matchId)
  console.log(id);
  

  return (
    <>
        <Header/>
        <Match/>
        <Team1/>
        <Team2/>
        <Status/>
        <Batters/>
        <Bowler/>
        <Commentary/>
    </>
  )
}

export default MatchLive