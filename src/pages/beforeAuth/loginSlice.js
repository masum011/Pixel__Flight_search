import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '../../services/apiservices';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
  admindata:null,
};

export const fetchData = createAsyncThunk('admin/fetchData', async (payload) => {
  try {
    const data = await fetchDataFromApi(payload);
    return data;
  } catch (error) {
    throw error;
  }
});


const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        localStorage.setItem('token',action.payload.data.token)
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.log(action)
        state.status = 'failed';
        state.error = action.error.message;
      })

  },
});

export const { } = loginSlice.actions;
export default loginSlice.reducer;