import { useMutation } from 'react-query';
import { AdService } from '../services';
import { Ad } from '../utils/types';

const useUpdateAd = () => {
  return useMutation<Ad, Error, { id: string; adData: Ad }>(
    ({ id, adData }) => AdService.updateAd(id, adData)
  );
};

export default useUpdateAd;
