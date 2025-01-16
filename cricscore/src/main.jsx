import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MatchLive from './pages/MatchLive'
import MatchInfo from './pages/MatchInfo'
import MatchScorecard from './pages/MatchScorecard'
import MatchSquads from './pages/MatchSquads'
import NewsList from './pages/NewsList'
import MatchList from './pages/MatchList'
import NewsPostPage from './pages/NewsPostPage'



const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children: [
      {
        path : '/',
        element:<Home/>
      },
      {
        path : '/matchLive',
        element:<MatchLive/>
      },
      {
        path : '/matchInfo',
        element:<MatchInfo/>
      },
      {
        path : '/matchScorecard',
        element:<MatchScorecard/>
      },
      {
        path : '/matchSquads',
        element:<MatchSquads/>
      },
      {
        path : '/matchList',
        element:<MatchList/>
      },
      {
        path : '/newsList',
        element:<NewsList/>
      },
      {
        path : '/newsPostPage',
        element:<NewsPostPage/>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    {/* <Home/> */}
    {/* <MatchLive/> */}
    {/* <MatchInfo/> */}
    {/* <MatchScorecard/> */}
    {/* <MatchSquads/> */}
    {/* <NewsList/> */}
    {/* <MatchList/> */}
    {/* <NewsPostPage/> */}
 
   </Provider>
  </StrictMode>,
)
