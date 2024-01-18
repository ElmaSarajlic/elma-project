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
    imageURL : string;
    
}
export type Subcategory = {
    id: string;
    title: string;
  };
  
  export type Category = {
    id: string;
    title: string;
    subcategories: Subcategory[];
  };
  