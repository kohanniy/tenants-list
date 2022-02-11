import { configureStore } from '@reduxjs/toolkit';
import streetsReducer from './slices/streetsSlice';
import housesReducer from './slices/housesSlice';
import flatsReducer from './slices/flatsSlice';
import tenantsReducer from './slices/tenantsSlice';

export const store = configureStore({
  reducer: {
    streets: streetsReducer,
    houses: housesReducer,
    flats: flatsReducer,
    tenants: tenantsReducer,
  },
});
