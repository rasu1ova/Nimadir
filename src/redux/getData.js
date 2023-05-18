import { createSlice } from "@reduxjs/toolkit";
import { fetchMyData } from "./getActions";

const clothesData = createSlice({
  name: "clothesData",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMyData.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(fetchMyData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default clothesData.reducer;
