import { Category } from "../utils/types";
import appAxios from "./AppAxios";


const getAllCategories = async (): Promise<Category[]> => {
    return appAxios.get(`/categories/`).then(
        (response) => {
            const data = response.data;
            console.log(data); 

            return data;
        });
}

export default getAllCategories