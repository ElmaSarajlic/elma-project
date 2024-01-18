import { User } from "../utils/types";
import appAxios from "./AppAxios";

const getUserById = async (id: string): Promise<User> => {
    console.log(`Fetching user with ID: ${id}`);
    
    return appAxios.get(`/users/${id}`).then((response) => {
        const data = response.data;
        console.log('Response data:', data);
  
        return data;
    }).catch((error) => {
        console.log('Error fetching user (Users.ts):', error);
        // throw error; // Re-throw the error for further handling
    });
};

export default { getUserById };
