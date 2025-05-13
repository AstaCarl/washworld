import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TabsNavigation } from "./navigation/TabsNavigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavigationWrapper from "./navigation/NavigationWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationWrapper />
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
