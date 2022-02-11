import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isPendingAction, isFulfilledAction } from '../helpers';
import { getData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  streets: null,
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
      .addCase(getStreets.fulfilled, (state, action) => {
        state.streets = action.payload;
      })
      .addMatcher(isPendingAction, (state) => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.status = 'success';
      });
  },
});

export const { setCurrentStreet } = streetsSlice.actions;

export const selectStreets = (state) => state.streets;

export default streetsSlice.reducer;
