import { useMutation } from 'react-query';
import appAxios from '../services/AppAxios';
import { Ad } from '../utils/types';

// Define a type for the response if needed, here it's assumed to be AdDTO
export const useUpdateAd = () => {
  return useMutation(async (adData: Ad) => {
    const { id, ...adRequestDTO } = adData; // Destructure to separate id from the rest of the data
    const response = await appAxios.put(`/ads/${id}`, adRequestDTO);
    return response.data;
  });
};


export default useUpdateAd;
