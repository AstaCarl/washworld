import { useQuery } from "@tanstack/react-query";
import { MapApi } from "./mapApi";


  // Custom hook to fetch locations using the MapApi
export const useGetLocations = () => {
  return useQuery({
    queryKey: ["locations"], // Unique key for the query to identify it
    queryFn: async () => {
      try {
        return await MapApi.getLocations();
      } catch (error) {
        console.error("useGetLocations error:", error);
        // Return an empty array if there's an error
        return [];
      }
    },
    refetchOnWindowFocus: true, // Refetch data when the window gains focus
  });
};
