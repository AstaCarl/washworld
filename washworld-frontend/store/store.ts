import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../screens/auth/authSlice";

// Create and configure the Redux store with the authentication reducer
export const store = configureStore({
  reducer: {
    auth: authReducer, // Authentication state management
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;