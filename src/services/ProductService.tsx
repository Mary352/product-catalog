import type { Product } from '@/models/Products/api';
import axios from 'axios';

class ProductService {
   private URL = 'https://fakestoreapi.com/products'

   getProducts = () => {
      return axios.get<Product[]>(this.URL)
   }
}

export const productService = new ProductService()