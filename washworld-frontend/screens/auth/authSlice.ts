import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "./userDto";
import { AuthApi } from "./authApi";
import * as SecureStore from "expo-secure-store";

// Function to handle user signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (userDto: UserDto, thunkAPI) => {
    console.log("calling signup thunk");
    return await AuthApi.signup(userDto);
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
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log("signup fulfilled", action.payload);
      state.errormessage = "";
      SecureStore.setItemAsync("jwt", action.payload.access_token);
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
  },
});


export default authSlice.reducer;
