import type { Product } from "./api"

export type ProductCardProps = {
   product: Product
}

export type ProductListProps = {
   products?: Product[]
}

export type SearchProps = {
   search: string,
   setSearch: (value: string) => void
}