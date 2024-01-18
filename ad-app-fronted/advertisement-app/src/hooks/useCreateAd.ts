import { useMutation, useQueryClient } from "react-query";
import { Ad } from "../utils/types";
import { AdService } from "../services";

interface ApiError {
  message: string;
}

const useCreateAd = () => {
    const queryClient = useQueryClient();
    return useMutation((data: Ad) => AdService.CreateAd(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('ads');
        },
    });
 };

export default useCreateAd;
