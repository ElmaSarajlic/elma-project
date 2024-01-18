import { Ad } from "../utils/types";
import appAxios from "./AppAxios";


const getallAds = async (): Promise<Ad[]> => {
    return appAxios.get(`/ads/`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}

const CreateAd = async (ad: Ad): Promise<Ad[]> => {
    return appAxios.post('/ads/', ad).then(
        (response) => {
            const data = response.data;
            console.log(response);
            console.log(data);
 
            return data;
        });
 }

 const getAdsBySubcategory = async (subcategoryName: string): Promise<Ad[]> => {
    const response = await appAxios.get(`/ads/subcategory/name/${subcategoryName}`);
    return response.data;
}


export default {getallAds, CreateAd, getAdsBySubcategory}