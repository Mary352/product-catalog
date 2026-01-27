import type { ProductsPaginationProps } from "@/models/Products/client"
import {
   ButtonGroup,
   IconButton,
   Pagination,
   Stack,
} from "@chakra-ui/react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const pageSize = 12

const ProductsPagination = ({ count, page, setPage, children }: ProductsPaginationProps) => {
   return (
      <Stack gap="4">
         {children}
         <Pagination.Root
            count={count}
            pageSize={pageSize}
            page={page}
            onPageChange={(e) => setPage(e.page)}
         >
            <ButtonGroup variant="ghost" size="sm">
               <Pagination.PrevTrigger asChild>
                  <IconButton>
                     <HiChevronLeft />
                  </IconButton>
               </Pagination.PrevTrigger>

               <Pagination.Items
                  render={(page) => (
                     <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                        {page.value}
                     </IconButton>
                  )}
               />

               <Pagination.NextTrigger asChild>
                  <IconButton>
                     <HiChevronRight />
                  </IconButton>
               </Pagination.NextTrigger>
            </ButtonGroup>
         </Pagination.Root>
      </Stack>
   )
}

export default ProductsPagination