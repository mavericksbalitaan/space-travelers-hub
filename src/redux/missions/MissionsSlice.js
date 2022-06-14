import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://api.spacexdata.com/v3/missions';

// Async Action Creators
export const fetchMissionsApi = createAsyncThunk(
  'missions/fetchMissionsApi',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Slice Reducer
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchMissionsApi.fulfilled]: (state, action) => {
      const missions = action.payload.map((el) => ({
        id: el.mission_id,
        missionName: el.mission_name,
        missionDesc: el.description,
      }));
      return missions;
    },
  },
});

export default missionsSlice.reducer;
