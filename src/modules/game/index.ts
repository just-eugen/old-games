import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
  PayloadAction,
} from "@reduxjs/toolkit";

import { AxiosClient } from "../axios-client";
import { TGameState } from "./types";
import { TGame } from "../../routes/home/types";

const name = "game";

const initialState: TGameState = {
  gameList: [],
  isLoading: false,
};

const axiosClient = new AxiosClient(
  "https://69342a414090fe3bf01f241d.mockapi.io/"
);

export const getGames = createAsyncThunk("game/getGames", async () => {
  const { data } = await axiosClient.get("/test");
  return data;
});

const reducers = {
  addGame: (state: TGameState, action: PayloadAction<TGame>) => {
    const contains = state.gameList.some((e) => e.id === action.payload.id);
    if (!contains) {
      state.gameList.push(action.payload);
    }
  },
  clear: (state: TGameState) => {
    state.gameList = [];
  },
};

const extraReducers = (builder: ActionReducerMapBuilder<TGameState>) => {
  builder
    .addCase(getGames.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getGames.fulfilled, (state, action) => {
      state.gameList = action.payload;
    })
    .addCase(getGames.rejected, (state) => {
      state.gameList = [];
    })
    .addMatcher(getGames.settled, (state) => {
      state.isLoading = false;
    });
};

export const gameSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

export default gameSlice.reducer;

export const { addGame, clear } = gameSlice.actions;
