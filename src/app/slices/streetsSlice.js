import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  streets: [],
  currentStreet: null,
  status: 'idle',
};

export const getStreets = createAsyncThunk('streets/getStreets', async () => {
  const data = await getData(apiPaths.STREETS);
  return data;
});

export const streetsSlice = createSlice({
  name: 'streets',
  initialState,
  reducers: {
    setCurrentStreet: (state, action) => {
      state.currentStreet = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStreets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getStreets.fulfilled, (state, action) => {
        state.status = 'idle';
        state.streets = action.payload;
      });
  },
});

export const { setCurrentStreet } = streetsSlice.actions;

export const selectStreets = (state) => state.streets;

export default streetsSlice.reducer;
