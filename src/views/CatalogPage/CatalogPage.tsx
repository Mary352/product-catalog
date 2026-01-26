import { useProducts } from '@/hooks/useProducts'
import ProductsList from '@/components/widgets/ProductsList/ProductsList'
import Search from '@/components/widgets/Search/Search'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

const CatalogPage = () => {
   const { isPending, isError, data } = useProducts()
   const [searchValue, setSearchValue] = useState("")
   const [debouncedSearchValue] = useDebounce(searchValue, 300)

   const filteredData = debouncedSearchValue.trim() ? data?.filter(val => {
     return val.title.toLocaleLowerCase().includes(debouncedSearchValue.toLocaleLowerCase())   
   }) : data

   return <>
   <Search search={searchValue} setSearch={setSearchValue}></Search>
   <ProductsList products={filteredData}/>
   </>
}

export default CatalogPage