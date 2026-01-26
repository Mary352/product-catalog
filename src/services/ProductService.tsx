import type { Product } from '@/models/Products/api';
import axios from 'axios';

class ProductService {
   // private URL = 'https://fakestoreapi.com/products'
   private URL = 'https://dummyjson.com/products'

   getProducts = () => {
      // return axios.get<Product[]>(this.URL)
      return axios.get<{products: Product[]}>(this.URL)
   }
}

export const productService = new ProductService()