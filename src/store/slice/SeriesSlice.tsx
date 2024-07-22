import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SeriesState } from '../../type/type';

const initialState: SeriesState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchSeries = createAsyncThunk("series/fetchSeries", async () => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
  return response.data.results;
});

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export default seriesSlice.reducer;
