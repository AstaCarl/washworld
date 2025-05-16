import { useQuery } from "@tanstack/react-query"
import { MapApi } from "./mapApi";



  export const useGetLocations = () => {
    return useQuery({
      queryKey: ["locations"],
      queryFn: async () => {
        try {
          return await MapApi.getLocations();
        } catch (error) {
          console.error("useGetLocations error:", error);
          // Return an empty array if there's an error
          return [];
        }
      },
    });
  };


