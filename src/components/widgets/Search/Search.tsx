import { Input, InputGroup } from "@chakra-ui/react"
import { GoSearch } from "react-icons/go"
import type { SearchProps } from "@/models/Products/client"

const Search = ({ search, setSearch, setSelectedCategory, setPage }: SearchProps) => {

   function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      setSearch(e.target.value)
      setSelectedCategory([])
      setPage(1)
   }

   return <InputGroup startElement={<GoSearch />}>
      <Input placeholder="Название товара" value={search} onChange={onChange} />
   </InputGroup>
}

export default Search