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

export const checkAuth = createAsyncThunk(
  "auth/check",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("auth/check");
      return response.data;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Authentication check failed";
      return rejectWithValue(errorMsg);
    }
  }
);

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

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("auth/login", credentials);
      return response.data;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Login failed. Please try again.";
      return rejectWithValue(errorMsg);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post("auth/logout");
      return true;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Logout failed. Please try again.";
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
      })
      .addCase(login.pending, (state) => {
        state.isLoggingIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggingIn = false;
        state.authUser = action.payload;
        console.log(state.authUser);
        toast.success("Login successfully");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggingIn = false;
        toast.error(action.payload);
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isCheckingAuth = false;
        state.authUser = action.payload;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isCheckingAuth = false;
        console.log(action.payload);
      })
      .addCase(logout.fulfilled, (state) => {
        state.authUser = null;
        toast.success("Logout successfully");
      })
      .addCase(logout.rejected, (_, action) => {
        toast.error(action.payload);
      });
  },
});

export default authSlice.reducer;
