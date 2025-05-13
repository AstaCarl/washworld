import { useQuery } from "@tanstack/react-query"
import { UserApi } from "./userApi";
// import { useMutation, useQueryClient } from "@tanstack/react-query" 


export const useGetMemberships = () => {
    return useQuery({
      queryKey: ["memberships"],
      queryFn: async () => {
        try {
          return await UserApi.getMemberships();
        } catch (error) {
          console.error("useGetEntries error:", error);
          // Return an empty array if there's an error
          return [];
        }
      },
    });
  };


