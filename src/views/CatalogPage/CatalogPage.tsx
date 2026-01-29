import { useProducts } from '@/hooks/useProducts'
import ProductsList from '@/components/widgets/ProductsList/ProductsList'
import Search from '@/components/widgets/Search/Search'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useCategories } from '@/hooks/useCategories'
import ProductsFilter from '@/components/widgets/ProductsFilter/ProductsFilter'
import { useProductsByCategory } from '@/hooks/useProductsByCategory'
import ProductsSort from '@/components/widgets/ProductsSort/ProductsSort'
import { SORT_ORDER } from '@/utils/constants/productsConstants'
import { sortProducts } from '@/utils/helpers/productsHelpers'
import { Toaster } from '@/components/ui/toaster'

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

   return <>
      <Toaster />
      <Search search={searchValue} setSearch={setSearchValue} setSelectedCategory={setSelectedCategory} setPage={setPage} />
      <ProductsFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearch={setSearchValue} setPage={setPage} />
      <ProductsSort selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} products={finalData} setPage={setPage} />
      <ProductsList products={visibleItems} count={count} page={page} setPage={setPage} />
   </>
}

export default CatalogPage