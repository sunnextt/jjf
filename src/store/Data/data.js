import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUser: null,
  allApplication: null,
  paymentLogs: null,
};

const dataSlice = createSlice({
  name: 'allUsers',
  initialState: initialState,
  reducers: {
    setAllUser: (state, action) => {
      state.allUser = action.payload.data;
    },
    setAllApplications: (state, action) => {
      state.allApplication = action.payload.data;
    },
    setAllPaymentLogs: (state, action) => {
      state.paymentLogs = action.payload.data;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
