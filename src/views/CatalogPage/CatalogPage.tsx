import { useQuery } from '@tanstack/react-query'
import { productService } from '@/services/ProductService'
import { useProducts } from '@/hooks/useProducts'
import { Button, Card, Field, Input, Stack } from "@chakra-ui/react"
import ProductCard from '@/components/dummies/ProductCard'
import ProductsList from '@/components/widgets/ProductsList/ProductsList'

const CatalogPage = () => {
   const { isPending, isError, data } = useProducts()

   return <ProductsList products={data}/>
}

export default CatalogPage