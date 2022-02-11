import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isPendingAction, isFulfilledAction } from '../helpers';
import { getData, addData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  tenants: null,
  currentTenant: null,
  status: 'idle',
};

export const getTenants = createAsyncThunk('tenants/getTenants', async (id) => {
  const data = await getData(apiPaths.TENANTS, {
    params: {
      addressId: id,
    },
  });
  return data;
});

export const addTenant = createAsyncThunk('tenants/addTenant', async (values) => {
  const data = await addData(apiPaths.ADD_TENANT, values);
  values.id = data.id;
  return values;
});

export const tenantsSlice = createSlice({
  name: 'tenants',
  initialState,
  reducers: {
    resetTenants: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTenants.fulfilled, (state, action) => {
        state.tenants = action.payload;
      })
      .addCase(addTenant.fulfilled, (state, action) => {
        state.tenants.push(action.payload);
      })
      .addMatcher(
        isPendingAction,
        (state) => {state.status = 'loading';}
      )
      .addMatcher(
        isFulfilledAction,
        (state) => {state.status = 'success';}
      );
  },
});

export const { resetTenants } = tenantsSlice.actions;

export const selectTenants = (state) => state.tenants;

export default tenantsSlice.reducer;
