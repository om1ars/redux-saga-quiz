import { createSlice } from "@reduxjs/toolkit";
import * as stages from '../utils/constants'

const initialState = {
  stage: stages.s,
  userName: "",
};
