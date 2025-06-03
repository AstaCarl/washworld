import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WashApi } from "./washApi";

// Custom hook to create a wash, which uses the TanStack Query library for data fetching and mutation
export const useCreateWash = (onSuccessCallback?: (data: any) => void) => {

  const queryClient = useQueryClient();// Create a query client instance
  
  // Return a mutation object that can be used to create a wash
  return useMutation({
    mutationFn: ({ washObject, token }: { washObject: any; token: string }) =>
      WashApi.createWash(washObject, token), // call the createWash method from WashApi
    onSuccess: (data) => {
      // Invalidate the "washes" query to refetch the data to ensure the UI is updated with the latest data
      queryClient.invalidateQueries({ queryKey: ["washes"] });

      // Callback after a successful mutation, to perform any additional actions
      // such as navigating to another screen or updating the state
      if (onSuccessCallback) onSuccessCallback(data);
    },
    // Handle errors that occur during the mutation
    onError: (error) => {
      console.error("Error creating wash:", error);
    },
  });
};

// Custom hook to get a wash by its ID
export const useGetWashById = (washId: number) => {
  // Return a query object that fetches a wash by its ID
  return useQuery({
    queryKey: ["wash", washId],
    // The query function that fetches the wash data from the API
    queryFn: async () => {
      try {
        return await WashApi.getWashById(washId);
      } catch (error) {
        console.error("Error fetching programmes:", error);
        return {};
      }
    },
  });
};
