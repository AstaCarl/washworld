import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../screens/auth/authSlice";

// Create and configure the Redux store with the authentication reducer
export const store = configureStore({
  reducer: {
    auth: authReducer, // Authentication state management
  },
});

// Export types for the root state and dispatch to be used in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
