import { createSlice } from "@reduxjs/toolkit";
import * as stages from '../utils/constants'

const initialState = {
  stage: stages.START_GAME,
  userName: "",
};


const gameInitSlice = createSlice({
    name: 'gameState',
    initialState.
})