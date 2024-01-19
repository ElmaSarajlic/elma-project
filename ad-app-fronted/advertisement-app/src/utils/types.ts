export type Ad =  {
    id: string;
    title: string;
    subcategory: string;
    description: string;
    contact:string;
    imgUrl:string;
}

export type User ={
    avatarUrl: string;
    id: string;
    username: string;
    userType: string;
    email : string;
    password : string;
    imgUrl : string;
    
}
export type Subcategory = {
    id: string;
    name: string;
  };
  
  export type Category = {
    id: string;
    name: string;
    subcategories: Subcategory[];
  };
  