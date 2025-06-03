import { useQuery } from "@tanstack/react-query";
import { AdditionalProgrammeApi } from "./AdditionalProgrammeApi";

// Fetch additional programmes using the tanstack query
export const useGetAdditionalProgrammes = () => {
  return useQuery({
    queryKey: ["additionalProgrammes"], // Unique key for the query
    // query function to call the API
    queryFn: async () => {
      try {
        return await AdditionalProgrammeApi.getAdditionalProgrammes();
      } catch (error) {
        console.error("Error fetching additional programmes:", error);
        return [];
      }
    },
  });
};
