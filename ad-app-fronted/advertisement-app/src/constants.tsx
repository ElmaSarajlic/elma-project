import { Ad } from './utils/types'; // Make sure to import the Ad type or adjust the import path
import{User} from './utils/types';
import { Category } from './utils/types' ; 


export const adList: Ad[] = [{
    id:"1",
    title: 'reklama1',
    description: 'reklamni proizvod itd',
    subcategory: 'selling',
    contact:'email.com',
    imgUrl : 'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg'

  },

    {
    id:"2",
    title: 'reklama2',
    description: 'reklamni proizvod itd',
    subcategory: 'selling',
    contact:'email.com',
    imgUrl:'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg'


    },
    {
    id:"3",
    title: 'reklama3',
    description: 'reklamni proizvod itd',
    subcategory: 'selling',
    contact:'email.com',
    imgUrl:'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg'


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
      