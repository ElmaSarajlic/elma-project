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

const AddAd = async (ad:Ad): Promise<Ad> => {
    try {
        const response = await appAxios.post(`/ads/`, ad);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default {getallAds, AddAd}