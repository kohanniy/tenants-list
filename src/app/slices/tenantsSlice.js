import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  tenants: null,
  currentTenant: null,
  status: 'idle',
};

export const getTenants = createAsyncThunk('tenants/getTenants', async (id) => {
  const data = await getData(apiPaths.TENANTS, { params: {
    addressId: id,
  }});
  return data;
});

export const tenantsSlice = createSlice({
  name: 'tenants',
  initialState,
  reducers: {
    resetTenants: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTenants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTenants.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tenants = action.payload;
      });
  },
});

export const { resetTenants } = tenantsSlice.actions;

export const selectTenants = (state) => state.tenants;

export default tenantsSlice.reducer;
