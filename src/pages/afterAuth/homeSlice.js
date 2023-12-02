import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFlightData, fetchFlightListsData } from "../../services/apiservices";

const initialState = {
  data: null,
  status: "idle",
  error: null,
  admindata: null,
  cartValue:0
};

export const fetchFlight = createAsyncThunk("fetch/flight", async (payload) => {
  try {
    const data = await fetchFlightData(payload);
    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchFlightList = createAsyncThunk("flight/list", async () => {
  try {
    const data = await fetchFlightListsData();
    return data;
  } catch (error) {
    throw error;
  }
});


const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      state.cartValue += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlight.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlight.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchFlight.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
        state.error = action.error.message;
      })
      
      .addCase(fetchFlightList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlightList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchFlightList.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {increment} = homeSlice.actions;
export default homeSlice.reducer;
