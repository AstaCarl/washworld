import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "./userDto";
import { UserApi } from "./userApi";
import * as SecureStore from "expo-secure-store";

// Define the parameters for the login function
type LoginParams = {
  username: string;
  password: string;
};

// Function to handle user signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (
    userDto: UserDto,
    thunkAPI: { rejectWithValue: (value: any) => any } // RejectWithValue lets us return custom error messages
  ) => {
    const response = await UserApi.signup(userDto);

    // Check if the response has a status code indicating a specific "user already exists"
    if (response.statusCode && response.statusCode >= 400) {
      return thunkAPI.rejectWithValue(response);
    }
    return response;
  }
);

// Function to handle user login
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
    await SecureStore.setItemAsync("jwt", response.access_token); // Store the JWT token in secure storage
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

// Define types for the auth state
interface AuthState {
  token: string;
  errormessage: string;
}

// Initial state for the auth state
const initialState: AuthState = {
  token: "",
  errormessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer to handle user logout
    logout: (state) => {
      SecureStore.deleteItemAsync("jwt");
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    // Handle the signup action when succecsful 
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log("signup fulfilled", action.payload);
      state.errormessage = "";
      // Store the JWT token and user information in secure storage
      SecureStore.setItemAsync("jwt", action.payload.access_token);
      SecureStore.setItemAsync("userId", action.payload.user.id);
      SecureStore.setItemAsync("membership", action.payload.user.membership);

      // Update the state with the new token
      state.token = action.payload.access_token;
    }),
    // Handle the signup action when it fails
      builder.addCase(signup.rejected, (state, action) => {
        console.log("signup rejected", action.payload);
        // Set the error message in the state
        state.errormessage = action.error.message || "Unknown error"; 
      });
    // Handle the case when the user is already logged in
    builder.addCase(reloadJwtFromStorage.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    // Handle the login action when successful
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("login fulfilled", action.payload);
      state.errormessage = "";
      // Store the JWT token in secure storage
      SecureStore.setItemAsync("jwt", action.payload.access_token);
      // Store the token in state
      state.token = action.payload.access_token;
    }),
    // Handle the login action when it fails
      builder.addCase(login.rejected, (state, action) => {
        console.log("login rejected", action.payload);
        // Set the error message in the state
        state.errormessage = action.error.message || "Unknown error";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
