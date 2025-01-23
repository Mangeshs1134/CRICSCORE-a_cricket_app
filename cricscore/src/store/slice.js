import {createSlice} from '@reduxjs/toolkit'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'

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
    name : 'globalNav',
    initialState : initialNavState,
    reducers : {},
})

export const navReducer = navSlice.reducer



// Creating global NewsPost id container

const initialPostId = {
    postId : null
}

const postIdSlice = createSlice({
    name : 'globalPostId',
    initialState : initialPostId,
    reducers : {
        setPostId : (state, actions) => {
            state.postId = actions.payload
        }
    }
})
export const {setPostId} = postIdSlice.actions
export const postIdReducer = postIdSlice.reducer


// Creating global NewsPost id container

const initialMatchId = {
    matchId : null
}

const matchIdSlice = createSlice({
    name : 'globalMatchId',
    initialState : initialMatchId,
    reducers : {
        setId : (state, actions) => {
            state.matchId = actions.payload
            console.log(state.matchId);
        }
    }
})
export const {setId} = matchIdSlice.actions
export const matchIdReducer = matchIdSlice.reducer