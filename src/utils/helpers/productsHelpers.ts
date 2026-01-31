import type { Product } from "@/models/Products/api";
import type { ProductWithAmount } from "@/models/Products/client";

export function sortProducts(products: Product[], selectedOrder: string[]) {
   return products.sort((a: Product, b: Product) => {
      const valStr = selectedOrder[0]
      const optionsArr = valStr.split("_")
      const sortByOption = optionsArr[0]
      const order = optionsArr[1]

      if (sortByOption === "price") {
         if (order === "desc") {
            return b.price - a.price
         }
         else {
            return a.price - b.price
         }
      }

      if (sortByOption === "title") {
         if (order === "desc") {
            return b.title.localeCompare(a.title, "en")
         }
         else {
            return a.title.localeCompare(b.title, "en")
         }
      }

      return 0
   })
}

export function countProductsInCart(products: ProductWithAmount[]) {
   let productsArr: ProductWithAmount[] = [...products]
   if (!products) {
      const productsJSON = localStorage.getItem("products");
      if (!productsJSON) {
         return 0
      }

      productsArr.length = 0
      productsArr = JSON.parse(productsJSON)
   }

   return products.reduce((accum, prod) => accum + prod.amount, 0)
}