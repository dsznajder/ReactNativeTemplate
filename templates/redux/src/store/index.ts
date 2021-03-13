import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { Platform } from 'react-native';

import appReducer from './app';

export const combinedReducers = combineReducers({
  app: appReducer,
});

const middleware = [...getDefaultMiddleware()];

if (__DEV__ && Platform.OS === 'ios') {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

const store = configureStore({
  reducer: combinedReducers,
  middleware,
  devTools: __DEV__,
});

export default store;
