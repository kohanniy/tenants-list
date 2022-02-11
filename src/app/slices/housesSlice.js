import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isPendingAction, isFulfilledAction } from '../helpers';
import { getData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  houses: null,
  currentHouse: null,
  status: 'idle',
};

export const getHouses = createAsyncThunk('houses/getHouses', async (id) => {
  const data = await getData(`${apiPaths.HOUSES}/${id}`);
  return data;
});

export const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setCurrentHouse: (state, action) => {
      state.currentHouse = action.payload;
    },
    resetHouses: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.fulfilled, (state, action) => {
        state.houses = action.payload;
      })
      .addMatcher(isPendingAction, (state) => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.status = 'success';
      });
  },
});

export const { resetHouses, setCurrentHouse } = housesSlice.actions;

export const selectHouses = (state) => state.houses;

export default housesSlice.reducer;
