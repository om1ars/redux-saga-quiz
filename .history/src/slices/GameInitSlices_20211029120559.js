import { createSlice } from "@reduxjs/toolkit";
import * as stages from "../utils/constants";

const initialState = {
  stage: stages.START_GAME,
  userName: "",
};

export const gameState = createSlice({
  name: "gameState",
  initialState,
  reducers: {},
});

export const {} = gameState.actions;

export default gameState.reducer;
