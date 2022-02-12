import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData, addData, updateData } from '../../services/api/api';
import { apiPaths } from '../../services/api/apiPaths';

const initialState = {
  tenants: null,
  currentTenant: null,
  status: 'idle',
};

export const isPendingAction = (action) => action.type.startsWith('tenants') && action.type.endsWith('pending');

export const isFulfilledAction = (action) => action.type.startsWith('tenants') && action.type.endsWith('fulfilled');

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

export const updateTenant = createAsyncThunk('tenants/updateTenant', async (data) => {
  await updateData(apiPaths.UPDATE_DELETE_TENANT, data.values);
  return data.updatedData;
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
      .addCase(updateTenant.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        state.tenants = state.tenants.map((tenant) => {
          if (tenant.id === action.payload.id) {
            return tenant = { ...tenant, ...action.payload}
          }
          return tenant;
        })
      })
      .addMatcher(isPendingAction, (state) => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.status = 'success';
      });
  },
});

export const { resetTenants } = tenantsSlice.actions;

export const selectTenants = (state) => state.tenants;

export default tenantsSlice.reducer;
