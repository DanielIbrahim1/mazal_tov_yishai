import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import customerReducer from './customerSlice'
import checkOutReducer from './checkOutSlice'

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    customer: customerReducer,
    checkOut:checkOutReducer
      },
});
