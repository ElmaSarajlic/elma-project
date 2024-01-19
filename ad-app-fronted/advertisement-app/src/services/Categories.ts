import { Category, Subcategory } from "../utils/types";
import appAxios from "./AppAxios";


const getAllCategories = async (): Promise<Category[]> => {
    return appAxios.get(`/categories`).then(
        (response) => {
            const data = response.data;
            console.log(data); 

            return data;
        });
}

const createCategory = async (category: Category): Promise<Category[]> => {
    return appAxios.post('/categories', category).then(
        (response) => { 
            const data = response.data;
            console.log(response);
            console.log(data);
 
            return data;
        });
 }


 const createSubcategory = async (categoryId: string, subcategory: Subcategory): Promise<Category> => {
    return appAxios.post(`/categories/${categoryId}/subcategories`, subcategory).then((response) => {
      const data = response.data;
      return data;
    });
  };
  

export default {getAllCategories, createCategory, createSubcategory}