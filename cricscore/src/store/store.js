import {configureStore} from '@reduxjs/toolkit'
import menuReducer from './slice'
import { teamReducer, navReducer, postIdReducer, matchIdReducer, reloadReducer } from './slice'

const store = configureStore({
    reducer:{
        globalMenu : menuReducer,
        globalTeam : teamReducer,
        globalNav : navReducer,
        globalPostId : postIdReducer,
        globalMatchId : matchIdReducer,
        reload : reloadReducer,
    },
})
export default store