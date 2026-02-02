import { useProducts } from '@/hooks/useProducts'
import ProductsList from '@/components/widgets/ProductsList/ProductsList'
import Search from '@/components/widgets/Search/Search'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
// import { useCategories } from '@/hooks/useCategories'
import ProductsFilter from '@/components/widgets/ProductsFilter/ProductsFilter'
// import { useProductsByCategory } from '@/hooks/useProductsByCategory'
import ProductsSort from '@/components/widgets/ProductsSort/ProductsSort'
import { SORT_ORDER } from '@/utils/constants/productsConstants'
import { sortProducts } from '@/utils/helpers/productsHelpers'
import { Toaster } from '@/components/ui/toaster'
import PageLayout from '@/components/layout/PageLayout'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { EmptyPage, EmptySearh } from '../EmptyPage/EmptyPage'
import { LuAnnoyed } from "react-icons/lu";
import CatalogPageSkeleton from './CatalogPageSkeleton'

const pageSize = 12

const CatalogPage = () => {
   const { isPending, isError, data } = useProducts()
   const [searchValue, setSearchValue] = useState("")
   const [selectedCategory, setSelectedCategory] = useState<string[]>([])
   const [debouncedSearchValue] = useDebounce(searchValue, 300)
   // const { data: productsByCategory } = useProductsByCategory({ category: selectedCategory?.[0] || "" })
   const [selectedOrder, setSelectedOrder] = useState<string[]>([SORT_ORDER.price_asc.value])
   const [page, setPage] = useState(1)

   const filteredData = debouncedSearchValue.trim() && data?.filter(val => {
      return val.title.toLocaleLowerCase().includes(debouncedSearchValue.toLocaleLowerCase())
   })

   // let dataByCategory;
   // if (selectedCategory?.length > 0) {
   //    dataByCategory = productsByCategory
   // }
   const dataByCategory = selectedCategory?.length > 0 && data?.filter(val => {
      return val.category.toLocaleLowerCase() === selectedCategory[0].toLocaleLowerCase()
   })

   const finalData = sortProducts(filteredData || dataByCategory || data || [], selectedOrder)
   const startRange = (page - 1) * pageSize
   const endRange = startRange + pageSize

   const visibleItems = finalData.slice(startRange, endRange)
   const count = finalData.length

   if (!isPending && !isError && (!data || data?.length === 0)) {
      return <EmptyPage
         title="Каталог пуст"
         icon={<LuAnnoyed />}
         description={<>Скоро новые поступления! Не пропустите!</>}
      />
   }

   if (isPending) {
      return <CatalogPageSkeleton />
   }

   return <PageLayout>
      <Toaster />
      <Box margin="0 auto" maxW="1000px" padding="0 15px" mb="15px" pt="2.5rem">
         <Search search={searchValue} setSearch={setSearchValue} setSelectedCategory={setSelectedCategory} setPage={setPage} />
         {(filteredData && filteredData.length === 0 && finalData.length === 0)
            ? <EmptySearh />
            : <>
               <Flex
                  mt="15px"
                  mb="40px"
                  justifyContent="space-between"
                  gap="0.5rem"
                  direction={{ base: "column", md: "row" }}
               >
                  <Box w="100%" md={{ maxW: "300px" }} >
                     <ProductsFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearch={setSearchValue} setPage={setPage} />
                  </Box>
                  <ProductsSort selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} products={finalData} setPage={setPage} />
               </Flex>
               <Heading margin="0 auto" w="fit-content" size="3xl">{selectedCategory.length > 0 ? selectedCategory : "Все товары"}</Heading>
            </>
         }
      </Box>
      <ProductsList products={visibleItems} count={count} page={page} setPage={setPage} />
   </PageLayout>
}

export default CatalogPage