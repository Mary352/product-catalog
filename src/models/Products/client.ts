import type { Product } from "./api"

export type ProductCardProps = {
   product: Product
}

export type ProductListProps = {
   products?: Product[]
}

export type SearchProps = {
   search: string,
   setSearch: (value: string) => void,
   setSelectedCategory: (value: string[]) => void
}

export type ProductsByCategoryProps = {
   category: string
}

export type ProductsFilterProps = {
   selectedCategory: string[],
   setSelectedCategory: (value: string[]) => void,
   setSearch: (value: string) => void
}

export type ProductsSortProps = {
   selectedOrder: string[],
   setSelectedOrder: (value: string[]) => void,
   products: Product[]
}