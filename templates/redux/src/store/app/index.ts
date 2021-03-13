import { createAction, createReducer } from '@reduxjs/toolkit';

export const setAppLoading = createAction<string, 'app/setLoading'>(
  'app/setLoading',
);

type AppReducerType = {
  loading: boolean;
};

const initialState = {
  loading: false,
};

const appReducer = createReducer<AppReducerType>(initialState, (builder) =>
  builder.addCase(setAppLoading, (_state, { payload }) => ({
    loading: payload,
  })),
);

export default appReducer;
