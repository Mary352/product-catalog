import ProductCard from "@/components/dummies/ProductCard"
import type { ProductListProps } from "@/models/Products/client"
import { Flex, Grid, GridItem } from "@chakra-ui/react"

const ProductsList = ({ products }: ProductListProps) => {
   if (!products || products.length === 0) {
      return null
   }

   return <Grid
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
      alignItems="stretch">         
      {products.map(product => <GridItem key={product.id}><ProductCard product={product} /></GridItem>)}
   </Grid>
}

export default ProductsList