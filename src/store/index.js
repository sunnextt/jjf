import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import uiSlice from './UI';
import dataSlice from './Data/data';
import changeState from './UI';

const enhancer = compose(applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    changeState,
    data: dataSlice.reducer,
  },
  enhancer,
});

export default store;
