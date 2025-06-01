import { useQuery } from "@tanstack/react-query"
import { UserApi } from "./userApi";


export const useGetMemberships = () => {
    return useQuery({
      queryKey: ["memberships"],
      queryFn: async () => {
        try {
          return await UserApi.getMemberships();
        } catch (error) {
          console.error("useGetMembership error:", error);
          // Return an empty array if there's an error
          return [];
        }
      },
    });
  };

  export const useGetLocations = () => {
    return useQuery({
      queryKey: ["locations"],
      queryFn: async () => {
        try {
          return await UserApi.getLocations();
        } catch (error) {
          console.error("useGetLocations error:", error);
          // Return an empty array if there's an error
          return [];
        }
      },
    });
  };


