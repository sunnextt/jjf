import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUser: null,
  allApplication: null,
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
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
