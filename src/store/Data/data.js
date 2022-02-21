import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
  article: null,
  coin: null,
  learnCategory: null,
  coinCategory: null,
};

const dataSlice = createSlice({
  name: 'allUsers',
  initialState: initialState,
  reducers: {
    setPosts: (state, action) => {
      state.post = action.payload.data;
    },
    setArticle: (state, action) => {
      state.article = action.payload.data;
    },
    setLearnCategory: (state, action) => {
      state.learnCategory = action.payload.data;
    },
    setCoin: (state, action) => {
      state.coin = action.payload.data;
    },
    setCoinCategory: (state, action) => {
      state.coinCategory = action.payload.data;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
