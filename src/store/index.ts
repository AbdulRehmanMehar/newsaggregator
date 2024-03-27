import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { newsApi } from './api/newsapi';
import { theGuardianApi } from './api/theguardian';
import { newYorkTimesApi } from './api/newyorktimes';
import appSlice from './slices/app';


export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [theGuardianApi.reducerPath]: theGuardianApi.reducer,
    [newYorkTimesApi.reducerPath]: newYorkTimesApi.reducer,
    [appSlice.name]: appSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware).concat(theGuardianApi.middleware).concat(newYorkTimesApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;