import {createSlice} from '@reduxjs/toolkit'

// for match navbar toggle
const initialMatchState = {
    menu : 'live',
    user : null,
}
const menuSlice = createSlice({
    name : 'globalMenu',
    initialState: initialMatchState,
    reducers : {
        toggleMenu : (state, payload)=>{
            if (state.menu !== payload.payload) {
                state.menu = payload.payload
            }else{
                state.menu == state.menu
            }
        }
    }
})
export const {toggleMenu} = menuSlice.actions
export default menuSlice.reducer

// for scorecard toggle
const initialTeamState = {
    team1 : 'MI',
    team2 : 'CSK',
    inning : 2  ,

    winner : null
}

const teamSlice = createSlice({
    name : 'globalTeam',
    initialState : initialTeamState,
    reducers : {},
})

export const teamReducer = teamSlice.reducer

// for home navbar toggle

const initialNavState = {
    team1 : 'MI',
    team2 : 'CSK',
    inning : 2  ,

    winner : null
}

const navSlice = createSlice({
    name : 'globalTeam',
    initialState : initialNavState,
    reducers : {},
})

export const navReducer = navSlice.reducer