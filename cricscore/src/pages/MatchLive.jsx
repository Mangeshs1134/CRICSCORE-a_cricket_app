import React from 'react'
import { Batters, Bowler, Commentary, Header, Match, Team1, Team2 } from '../components'

const MatchLive = () => {
  return (
    <>
        <Header/>
        <Match/>
        <Team1/>
        <Team2/>
        <Batters/>
        <Bowler/>
        <Commentary/>
    </>
  )
}

export default MatchLive