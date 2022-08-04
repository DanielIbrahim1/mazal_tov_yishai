import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData,addData, delData } from './customerAPI';

const initialState = {
  customerProdList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getDataAsync = createAsyncThunk('customer/fetchData',async () => {
    const response = await getData();
    // console.log(response.data);
    return response.data;
  }
);

export const addDataAsync = createAsyncThunk('customer/addData',async (newData) => {
    const response = await addData(newData);
    // console.log(response.data);
    return response.data;
  }
);

export const delDataAsync = createAsyncThunk('customer/delData',async (id) => {
    const response = await delData(id);
    // console.log(response)
    return id;
  }
);

// customer method
export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.customerProdList =action.payload;
      },)
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.customerProdList =[...state.customerProdList,action.payload];
      },)
      .addCase(delDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.customerProdList = state.customerProdList.filter((x) => x.id !== action.payload);
      },)

  },
});



// selctors to export
export const selectCustomerProdList = (state) => state.customer.customerProdList;

export default customerSlice.reducer;
