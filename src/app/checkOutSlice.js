import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData,addData } from './checkOutAPI';

const initialState = {
  checkOut:[],
  value: 0,
  status: 'idle',
};

// Async methodes
// export const getDataAsync = createAsyncThunk('checkOut/fetchData',async () => {
//     const response = await getData();
//     // console.log(response.data);
//     return response.data;
//   }
// );

export const addCheckOutAsync = createAsyncThunk('checkOut/addData',async (newData) => {
    const response = await addData(newData);
    // console.log(response.data);
    return response.data;
  }
);


// export const updDataAsync = createAsyncThunk('shop/updData',async (newData) => {
//   const response = await updData(newData, newData.id);
//   // console.log(response.data);
//   return response.data;
// }
// );


// customer method
export const checkOutSlice = createSlice({
  name: 'checkOut',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(addCheckOutAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.checkOut =[...state.checkOut,action.payload];
      },)

  
  },
});

// selctors to export
export const selectcheckOut = (state) => state.checkOut.checkOut;

export default checkOutSlice.reducer;
