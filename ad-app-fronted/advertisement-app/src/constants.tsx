import { Ad } from './utils/types'; // Make sure to import the Ad type or adjust the import path
import{User} from './utils/types';
import { Category } from './utils/types' ; 

export const adList: Ad[] = [{
    id:"1",
    title: 'reklama1',
    description: 'reklamni proizvod itd',
    category: 'selling',
    },
    {
    id:"2",
    title: 'reklama2',
    description: 'reklamni proizvod itd',
    category: 'selling',
    },
    {
    id:"3",
    title: 'reklama3',
    description: 'reklamni proizvod itd',
    category: 'selling',
    }]

    export const user: User = {
        id: "user_123",
        username: "Doe",
        userType: "admin",
        email: 'johndoe@gmail.com',
        password: 'password'
      }


     export const categoryList: Category[] = [
        {
          id: '1',
          title: 'Category 1',
          subCategories: [
            { id: 'sub1', title: 'Subcategory 1-1' },
            { id: 'sub2', title: 'Subcategory 1-2' },
            
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
      