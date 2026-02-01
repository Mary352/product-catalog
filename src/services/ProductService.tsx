import { type Category, type Product } from '@/models/Products/api';
import type { ProductsByCategoryProps } from '@/models/Products/client';
import axios from 'axios';

class ProductService {
   private URL = `${import.meta.env.VITE_BE_URL}/products`
   // private URL = 'https://dummyjson.com/products'
   private categoriesUrl = `${this.URL}/categories`

   getProducts = () => {
      return axios.get<Product[]>(this.URL)
      // return axios.get<{products: Product[]}>(this.URL)
   }

   getCategories = () => {
      return axios.get<string[]>(this.categoriesUrl)
   }

   getProductsByCategory = ({ category }: ProductsByCategoryProps) => {
      return axios.get<Product[]>(`${this.categoriesUrl}/${category}`)
   }
}

export const productService = new ProductService()