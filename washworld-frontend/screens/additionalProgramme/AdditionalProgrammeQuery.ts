import { useQuery } from "@tanstack/react-query";
import { AdditionalProgrammeApi } from "./AdditionalProgrammeApi";

export const useGetAdditionalProgrammes = () => {
  return useQuery({
    queryKey: ["additionalProgrammes"],
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
