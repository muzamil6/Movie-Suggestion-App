import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slice/CardSlice';
import seriesReducer from './slice/SeriesSlice';
import detailReducer from './slice/DetailMovie';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    series: seriesReducer,
    detail: detailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
