import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WashApi } from "./washApi";

export const useCreateWash = (onSuccessCallback?: (data: any) => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ washObject, token }: { washObject: any; token: string }) =>
      WashApi.createWash(washObject, token),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["washes"] });
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      console.error("Error creating wash:", error);
    },
  });
};

export const useGetWashById = (washId: number) => {
  return useQuery({
    queryKey: ["wash", washId],
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
