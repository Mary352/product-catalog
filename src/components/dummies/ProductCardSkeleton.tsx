import { Button, Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const ProductCardSkeleton = () => {
   return (
      <Card.Root h="100%" overflow="hidden">
         <Skeleton h="250px" />
         <Card.Body gap="2">
            <SkeletonText noOfLines={1} />
            <SkeletonText noOfLines={3} />
         </Card.Body>
         <Card.Footer gap="4" flexDirection="column" alignItems="start">
            <SkeletonText w="80px" noOfLines={1} justifySelf="end" mt="2" />
            <SkeletonText noOfLines={1} w={{ base: "100%", xl: "40%" }} />
            <Button variant="solid" disabled>Добавить в корзину</Button>
         </Card.Footer>
      </Card.Root>
   )
}

export default ProductCardSkeleton