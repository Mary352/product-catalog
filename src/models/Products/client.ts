import type { NumberInputValueChangeDetails } from "@chakra-ui/react"
import type { Product } from "./api"

export interface ProductWithAmount extends Product {
   amount: number
}

export interface CustomCart {
   products?: ProductWithAmount[],
   totalCost: number,
}

export type ProductCardHorizontalProps = {
   product: ProductWithAmount,
   products: ProductWithAmount[],
   setProducts: (value: ProductWithAmount[]) => void,
}

export type ProductCardProps  = {
   product: Product,
   setCountInCart: (value: number) => void,
}
export type ProductListProps = {
   products?: Product[],
   count: number,
   page: number,
   setPage: (value: number) => void,
   setCountInCart: (value: number) => void,
}

export type SearchProps = {
   search: string,
   setSearch: (value: string) => void,
   setSelectedCategory: (value: string[]) => void,
   setPage: (value: number) => void,
}

export type ProductsByCategoryProps = {
   category: string,
   setPage: (value: number) => void,
}

export type ProductsFilterProps = {
   selectedCategory: string[],
   setSelectedCategory: (value: string[]) => void,
   setSearch: (value: string) => void,
   setPage: (value: number) => void,
}

export type ProductsSortProps = {
   selectedOrder: string[],
   setSelectedOrder: (value: string[]) => void,
   products: Product[],
   setPage: (value: number) => void,
}

export type ProductsPaginationProps = {
   children: React.ReactNode,
   count: number,
   page: number,
   setPage: (value: number) => void,
}

export type CartLinkProps = {
   countInCart: number,
}

export type AmountInputProps = {
   amount: number,
   changeCounterValue: (e: NumberInputValueChangeDetails) => void,
   countInStock: number

}