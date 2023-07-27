import { createAsyncThunk } from "@reduxjs/toolkit";
import { myApi } from "../Api/myApi";

export const fetchMyData = createAsyncThunk("data/fetchData", async () => {
  const response = await myApi.getMyData();
  return response;
});
