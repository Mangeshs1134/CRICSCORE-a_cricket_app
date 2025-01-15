import {configureStore} from '@reduxjs/toolkit'
import menuReducer from './slice'
import { teamReducer } from './slice'

const store = configureStore({
    reducer:{
        globalMenu : menuReducer,
        globalTeam : teamReducer,
    },
})
export default store