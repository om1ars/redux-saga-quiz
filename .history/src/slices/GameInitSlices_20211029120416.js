import { createSlice } from "@reduxjs/toolkit";
import * as stages from '../utils/constants'

const initialState = {
  stage: stages.START_GAME,
  userName: "",
};


const gameState = createSlice({
    name: 'gameState',
    initialState,
    reducers: {}
})

export const {} = gameState.actions

export default game