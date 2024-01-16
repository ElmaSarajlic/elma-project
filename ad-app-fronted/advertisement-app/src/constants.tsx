import { Ad } from './utils/types'; // Make sure to import the Ad type or adjust the import path
import{User} from './utils/types';
import { Category } from './utils/types' ; 



    export const user: User = {
        id: "user123",
        username: "Elma Sarajlic",
        userType: "admin",
        email: 'elma@gmail.com',
        password: 'password',
        imageURL:'https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
      }


     export const categoryList: Category[] = [
        {
          id: '1',
          title: 'Category 1',
          subCategories: [
            { id: 'sub1', title: 'Subcategory 1-1' },
            { id: 'sub2', title: 'Subcategory 1-2' },
            { id: 'sub2', title: 'Subcategory 1-2' },
            { id: 'sub2', title: 'Subcategory 1-2' }
            
          ],
        },
        {
          id: '2',
          title: 'Category 2',
          subCategories: [
            { id: 'sub1', title: 'Subcategory 1-1' },
            { id: 'sub2', title: 'Subcategory 1-2' },
            
          ],
        },
        {
          id: '3',
          title: 'Category 3',
          subCategories: [
            { id: 'sub1', title: 'Subcategory 1-1' },
            { id: 'sub2', title: 'Subcategory 1-2' },
            
          ],
        }
        // ... more categories
      ];
      
      export const BASE_URL = 'http://localhost:8080/api'