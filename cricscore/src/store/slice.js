import {createSlice} from '@reduxjs/toolkit'

const initialMatchState = {
    menu : 'info',
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