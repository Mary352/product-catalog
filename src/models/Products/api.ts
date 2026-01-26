export interface Product {
   id: number,
   title: string,
   price: number,
   description: string,
   category: string,
   image: string,
   rating: {
      rate: number,
      count: number
   }
}

// export interface Product {
//    id: number,
//    title: string,
//    price: number,
//    description: string,
//    category: string,
//    images: string[],
//    rating: number,
//    stock: number,
// }

export interface Category {
   slug: string,
   name: string,
   url: string
}