import ProductCard from "@/components/dummies/ProductCard"
import ProductsPagination from "@/components/layout/ProductsPagination"
import type { ProductListProps } from "@/models/Products/client"
import { Grid, GridItem } from "@chakra-ui/react"

const ProductsList = ({ products, count, page, setPage }: ProductListProps) => {
   if (!products || products.length === 0) {
      return null
   }

   return <ProductsPagination count={count} page={page} setPage={setPage}>
      <Grid
         templateColumns={{ base: "repeat(auto-fit, minmax(240px, 1fr))", xl: "repeat(4, 1fr)" }}
         xl={{ gridTemplateRows: "repeat(3, 1fr)" }}
         gap={4}
         alignItems="stretch">
         {products.map(product => <GridItem key={product.id}><ProductCard product={product} /></GridItem>)}
      </Grid>
   </ProductsPagination>
}

export default ProductsList