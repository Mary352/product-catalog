import PageLayout from '@/components/layout/PageLayout'
import { Box, Flex, Skeleton, SkeletonText } from '@chakra-ui/react'
import ProductsListSkeleton from '@/components/widgets/ProductsList/ProductsListSkeleton'

const CatalogPageSkeleton = () => {
   return <PageLayout>
      <Box margin="0 auto" maxW="1000px" padding="0 15px" mb="15px" pt="2.5rem">
         <Skeleton h="40px" />
         <Flex
            mt="15px"
            mb="40px"
            justifyContent="space-between"
            gap="0.5rem"
            direction={{ base: "column", md: "row" }}
         >
            <Box w="100%" md={{ maxW: "300px" }} >
               <Skeleton h="40px" />
            </Box>
            <Flex gap="0.5rem" alignItems="center">
               <Skeleton h="36px" w="36px" />
               <SkeletonText noOfLines={1} w="140px" />
            </Flex>
         </Flex>
         <SkeletonText noOfLines={1} w="160px" margin="0 auto" />
      </Box>
      <ProductsListSkeleton />
   </PageLayout>
}

export default CatalogPageSkeleton