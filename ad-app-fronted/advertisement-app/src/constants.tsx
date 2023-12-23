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


  export const categoryList: Category[] =[{
    id : "1",
    title : "category1"
  },
  {
    id : "1",
    title : "category2"
  },
  {
    id : "1",
    title : "category3"
  }]