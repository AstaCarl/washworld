import { Provider } from "react-redux";
import { store } from "./store/store";
import NavigationWrapper from "./navigation/NavigationWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new instance of QueryClient for tanstack query
const queryClient = new QueryClient();

export default function App() {
  return (
    // Provides tanstack query client to the app
    <QueryClientProvider client={queryClient}> 
      {/* Provides Redux store to the app */}
      <Provider store={store}>
        {/* Handles navigations throughout the app */}
        <NavigationWrapper />
      </Provider>
    </QueryClientProvider>
  );
}
