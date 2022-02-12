import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  flats: null,
  currentFlat: null,
  status: 'idle',
};

export const isPendingAction = (action) =>
  action.type.startsWith('flats') && action.type.endsWith('pending');

export const isFulfilledAction = (action) =>
  action.type.startsWith('flats') && action.type.endsWith('fulfilled');

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
      .addCase(getFlats.fulfilled, (state, action) => {
        state.flats = action.payload;
      })
      .addMatcher(isPendingAction, (state) => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.status = 'success';
      });
  },
});

export const { resetFlats, setCurrentFlat } = flatsSlice.actions;

export const selectFlats = (state) => state.flats;

export default flatsSlice.reducer;
