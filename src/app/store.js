import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import addressReducer from './slices/addressSlice';
import streetsReducer from './slices/streetsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    address: addressReducer,
    streets: streetsReducer,
  },
});
