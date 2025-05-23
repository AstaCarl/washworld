import { useMutation, useQueryClient } from "@tanstack/react-query"
import { WashApi } from "./washApi"


export const useCreateWash = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: WashApi.createWash,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['washes'] })
        },
        onError: (error) => {
            console.error("Error creating wash:", error)
        }
    })
}