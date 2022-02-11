import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  flats: null,
  currentFlat: null,
  status: 'idle',
};

export const getFlats = createAsyncThunk('flats/getFlats', async (id) => {
  const data = await getData(`${apiPaths.FLATS}/${id}`);
  return data;
});

export const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    setCurrentFlat: (state, action) => {
      state.currentFlat = action.payload;
    },
    resetFlats: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFlats.fulfilled, (state, action) => {
        state.status = 'idle';
        state.flats = action.payload;
      });
  },
});

export const { resetFlats, setCurrentFlat } = flatsSlice.actions;

export const selectFlats = (state) => state.flats;

export default flatsSlice.reducer;
