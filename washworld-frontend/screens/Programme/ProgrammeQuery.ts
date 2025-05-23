import { useQuery } from "@tanstack/react-query";
import { ProgrammeApi } from "./ProgrammeApi";

export const useGetProgrammes = () => {
  return useQuery({
    queryKey: ["programmes"],
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
