import { useProducts } from '@/hooks/useProducts'
import ProductsList from '@/components/widgets/ProductsList/ProductsList'
import Search from '@/components/widgets/Search/Search'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useCategories } from '@/hooks/useCategories'
import ProductsFilter from '@/components/widgets/ProductsFilter/ProductsFilter'
import { useProductsByCategory } from '@/hooks/useProductsByCategory'

const CatalogPage = () => {
   const { isPending, isError, data } = useProducts()
   const [searchValue, setSearchValue] = useState("")
   const [selectedCategory, setSelectedCategory] = useState<string[]>([])
   const [debouncedSearchValue] = useDebounce(searchValue, 300)
   // const { data: productsByCategory } = useProductsByCategory({ category: selectedCategory?.[0] || "" })

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

   const finalData = filteredData || dataByCategory || data

   return <>
      <Search search={searchValue} setSearch={setSearchValue} setSelectedCategory={setSelectedCategory} />
      <ProductsFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearch={setSearchValue} />
      <ProductsList products={finalData} />
   </>
}

export default CatalogPage