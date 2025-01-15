
import Batters from './components/Batters'
import Match from './components/Match'
import Status from './components/Status'
import Team1 from './components/Team1'
import Team2 from './components/Team2'
import Bowler from './components/Bowler'
import store from './store/store'
import { Provider } from 'react-redux'
import Commentry from './components/Commentry'
import Scorecard from './components/scorecard'
import Squads from './components/Squads'
import Header from './components/Header'
import MatchCard from './components/MatchCard'
import NewsCard from './components/NewsCard'
import NewsPost from './components/NewsPost'
function App() {


  return (<Provider store={store}>
    <Header/>
    <MatchCard/>
    <NewsCard/>
    {/* <NewsPost/>
  <Match/>
  <Team1/>
  <Team2/>
  <Status/>
  <Batters/>
  <Bowler/>
  <Commentry/>
  <Scorecard/>
  <Squads/> */}
   </Provider>
  
  )
}

export default App
