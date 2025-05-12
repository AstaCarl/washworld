import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDto } from "./userDto";
import { AuthApi } from "./authApi";

export const signup = createAsyncThunk("auth/signup", async (userDto: UserDto, thunkAPI) => {
    return await AuthApi.signup(userDto);
});

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
        }),
        builder.addCase(signup.rejected, (state, action) => {
            console.log("signup rejected", action.payload);
            state.errormessage = action.error.message || "Unknown error";
        });
    }
    });

    export default authSlice.reducer;