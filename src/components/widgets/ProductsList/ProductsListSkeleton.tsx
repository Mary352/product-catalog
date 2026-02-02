import ProductCardSkeleton from "@/components/dummies/ProductCardSkeleton"
import { Grid, GridItem } from "@chakra-ui/react"

const ProductsListSkeleton = () => {

   return <Grid
      templateColumns={{ base: "repeat(auto-fit, minmax(240px, 1fr))", xl: "repeat(4, 1fr)" }}
      xl={{ gridTemplateRows: "repeat(3, 1fr)" }}
      gap={4}
      alignItems="stretch"
   >
      {Array.from({ length: 12 }).map((_, i) => <GridItem key={i}><ProductCardSkeleton /></GridItem>)}
   </Grid>
}

export default ProductsListSkeleton