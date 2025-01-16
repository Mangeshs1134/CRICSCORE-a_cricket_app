import React from 'react'
import {MatchCard, Header, NewsCard} from '../components/index.js' 
import Navbar from '../components/Navbar.jsx'

const Home = () => {
  return (
    <>
      <Header/>
      <MatchCard/> 
      <NewsCard/>
      <Navbar/>
    </>
  )
}

export default Home