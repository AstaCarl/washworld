import { useQuery } from "@tanstack/react-query";
import { ProgrammeApi } from "./ProgrammeApi";

// This hook fetches the list of programmes from the API using react-query
export const useGetProgrammes = () => {
  return useQuery({
    queryKey: ["programmes"],
    // Query function to fetch programmes data from the API
    queryFn: async () => {
      try {
        return await ProgrammeApi.getProgrammes();
      } catch (error) {
        console.error("Error fetching programmes:", error);
        return [];
      }
    },
  });
};
