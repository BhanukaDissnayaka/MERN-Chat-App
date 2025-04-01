import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const initialState = {
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,
};

export const singup = createAsyncThunk(
  "auth/singup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("auth/register", data);
      return response.data;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Signup failed. Please try again.";
      return rejectWithValue(errorMsg);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(singup.pending, (state) => {
        state.isSigningUp = true;
      })
      .addCase(singup.fulfilled, (state, action) => {
        state.isSigningUp = false;
        state.authUser = action.payload;
        toast.success("Account created successfully");
      })
      .addCase(singup.rejected, (state, action) => {
        state.isSigningUp = false;
        toast.error(action.payload);
      });
  },
});

export default authSlice.reducer;
