import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "./userDto";
import { UserApi } from "./userApi";
import * as SecureStore from "expo-secure-store";
import { stat } from "fs";

type LoginParams = {
  username: string;
  password: string;
};

// Function to handle user signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (
    userDto: UserDto,
    thunkAPI: { rejectWithValue: (value: any) => any }
  ) => {
    const response = await UserApi.signup(userDto);

    if (response.statusCode && response.statusCode >= 400) {
      return thunkAPI.rejectWithValue(response);
    }
    return response;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginParams: LoginParams, thunkAPI) => {
    const response = await UserApi.login(
      loginParams.username,
      loginParams.password
    );
    if (response.statusCode && response.statusCode >= 400) {
      return thunkAPI.rejectWithValue(response);
    }
    await SecureStore.setItemAsync("jwt", response.access_token);
    return response;
  }
);

// Function to handle user jwt token reload from storage
export const reloadJwtFromStorage = createAsyncThunk(
  "auth/reloadJwtFromStorage",
  async () => {
    const token = await SecureStore.getItemAsync("jwt");
    return token || "";
  }
);

interface AuthState {
  token: string;
  errormessage: string;
}

const initialState: AuthState = {
  token: "",
  errormessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      console.log("logout");
      SecureStore.deleteItemAsync("jwt");
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log("signup fulfilled", action.payload);
      state.errormessage = "";
      SecureStore.setItemAsync("jwt", action.payload.access_token);
      SecureStore.setItemAsync("userId", action.payload.user.id);
      SecureStore.setItemAsync("membership", action.payload.user.membership);
      state.token = action.payload.access_token;
    }),
      builder.addCase(signup.rejected, (state, action) => {
        console.log("signup rejected", action.payload);
        state.errormessage = action.error.message || "Unknown error";
      });
    // Handle the case when the user is already logged in
    builder.addCase(reloadJwtFromStorage.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("login fulfilled", action.payload);
      state.errormessage = "";
      SecureStore.setItemAsync("jwt", action.payload.access_token);
      state.token = action.payload.access_token;
    }),
      builder.addCase(login.rejected, (state, action) => {
        console.log("login rejected", action.payload);
        state.errormessage = action.error.message || "Unknown error";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
