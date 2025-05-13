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
  async (
    loginParams: LoginParams,
    thunkAPI: { rejectWithValue: (value: any) => any }
  ) => {
    const response = await UserApi.login(
      loginParams.username,
      loginParams.password
    );
    if (response.statusCode && response.statusCode >= 400) {
      return thunkAPI.rejectWithValue(response);
    }
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
  // Errors for each field, keyed by field name
  errors: { [key: string]: string };
}

const initialState: AuthState = {
  token: "",
  errormessage: "",
  errors: {},
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
      state.token = action.payload.access_token;
    }),
      builder.addCase(signup.rejected, (state, action) => {
        state.errors = {};
        console.log("signup rejected", action.payload);
        // Const to define the error message as the message property of the payload
        const error = (action.payload as { message: string }).message;
        // Check if the error is an array of strings
        if (error) {
          if (Array.isArray(error)) {
            // Map each error message to its corresponding field
            error.forEach((error: string) => {
              // Check if the error message contains a specific field name
              if (error.includes("license")) {
                state.errors.license = error;
              }
              if (error.includes("email")) {
                state.errors.email = error;
              }
              if (error.includes("password")) {
                state.errors.password = error;
              }
              if (error.includes("firstname")) {
                state.errors.firstname = error;
              }
              if (error.includes("location")) {
                state.errors.location = error;
              }
              if (error.includes("membership")) {
                state.errors.membership = error;
              }
              if (error.includes("lastname")) {
                state.errors.lastname = error;
              }
            });
          } else {
            // Handle a single error message
            state.errormessage = error;
          }
        } else {
          state.errormessage = "An unknown error occurred.";
        }
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
