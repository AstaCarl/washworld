import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { reloadJwtFromStorage } from "../screens/auth/authSlice";
import { AuthStackScreen } from "./AuthStackScreen";
import { TabsNavigation } from "./TabsNavigation";

const NavigationWrapper = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();


  
useEffect(() => {
  dispatch(reloadJwtFromStorage());
}, [dispatch]);


  return (
    <NavigationContainer>
      {/* Conditional render, if there is a token show tabs if not show stack */}
      {token ? <TabsNavigation /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default NavigationWrapper;
