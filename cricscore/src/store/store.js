import {configureStore} from '@reduxjs/toolkit'
import menuReducer from './slice'
import { teamReducer, navReducer } from './slice'

const store = configureStore({
    reducer:{
        globalMenu : menuReducer,
        globalTeam : teamReducer,
        globalNav : navReducer,
    },
})
export default store