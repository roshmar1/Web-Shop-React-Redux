import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchData } from './CardsAPI';
import {Iteam} from './Iteam';

export interface SquadState {
  iteams: Iteam[];  
}

const initialState: SquadState = {
  iteams: []
};

export const loadMembersAsync = createAsyncThunk(
  "squad/loadMembers",
  async () => {
    const response = await fetchData();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const cardSlice = createSlice({
  name: 'counter',
  initialState,
 
  reducers: {  
  },
  extraReducers: (builder) => {
    builder     
      .addCase(loadMembersAsync.fulfilled, (state, action) => {
        state.iteams = action.payload;
      });
  }
});

// export const {getStorageData,addStorageData} = cardSlice.actions;

export const selectStatus = (state: RootState) => state.data.iteams;

export default cardSlice.reducer;
