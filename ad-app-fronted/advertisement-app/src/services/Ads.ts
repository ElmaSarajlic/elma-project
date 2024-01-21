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

export default getallAds