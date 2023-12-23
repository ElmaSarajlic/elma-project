export type Ad =  {
    id: string;
    title: string;
    subcategory: string;
    description: string;
    contact:string;
    imgUrl:string;
}

export type User ={
    id: string;
    username: string;
    userType: string;
    email : string;
    password : string;
    
}
export type SubCategory = {
    id: string;
    title: string;
  };
  
  export type Category = {
    id: string;
    title: string;
    subCategories: SubCategory[];
  };
  