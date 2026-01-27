import type { ProductsSortProps } from "@/models/Products/client";
import { SORT_ORDER } from "@/utils/constants/productsConstants";
import { sortProducts } from "@/utils/helpers/productsHelpers";
import {
   Flex,
   HStack,
   IconButton,
   Portal,
   Select,
   createListCollection,
   useSelectContext,
   type SelectValueChangeDetails,
} from "@chakra-ui/react"
import type { JSX } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import { LuArrowDownWideNarrow, LuArrowDownNarrowWide } from "react-icons/lu";
import { RiForbidLine } from "react-icons/ri";

const sortOrderOptions = createListCollection({
   items: [
      { label: SORT_ORDER.price_asc.label, value: SORT_ORDER.price_asc.value, icon: <LuArrowDownNarrowWide /> },
      { label: SORT_ORDER.price_desc.label, value: SORT_ORDER.price_desc.value, icon: <LuArrowDownWideNarrow /> },
      { label: SORT_ORDER.title_asc.label, value: SORT_ORDER.title_asc.value, icon: <LuArrowDownNarrowWide /> },
      { label: SORT_ORDER.title_desc.label, value: SORT_ORDER.title_desc.value, icon: <LuArrowDownWideNarrow /> },
   ],
})

interface SortOrderOptions {
   label: string
   value: string
   icon: React.ReactNode
}

const SelectTrigger = () => {
   const select = useSelectContext()
   const items = select.selectedItems as SortOrderOptions[]

   return (
      <IconButton
         px="2"
         variant="outline"
         size="sm"
         {...select.getTriggerProps()}
      >
         {select.hasSelectedItems ? items[0].icon : <RiForbidLine />}
      </IconButton>
   )
}

const ProductsSort = ({ selectedOrder, setSelectedOrder, products }: ProductsSortProps) => {
   const defaultSelect = SORT_ORDER.price_asc
   const [selectedLabel, setSelectedLabel] = useState(defaultSelect.label)

   function onValueChange(e: SelectValueChangeDetails<{
      label: string;
      value: string;
   }>) {
      const val = e.value
      setSelectedOrder(val)

      const valStr = val[0]
      const selLabel = Array.from(sortOrderOptions).find((el: {
         label: string;
         value: string;
         icon: JSX.Element;
      }) => el.value === valStr)?.label || ""
      setSelectedLabel(selLabel)

      sortProducts(products, val)
   }
   return (
      <Flex gap="1rem" alignItems="center">
         <Select.Root
            positioning={{ sameWidth: false }}
            collection={sortOrderOptions}
            size="sm"
            width="fit-content"
            defaultValue={[defaultSelect.value]}
            value={selectedOrder}
            onValueChange={onValueChange}
         >
            <Select.HiddenSelect />
            <Select.Control>
               <SelectTrigger />
            </Select.Control>
            <Portal>
               <Select.Positioner>
                  <Select.Content minW="32">
                     {sortOrderOptions.items.map((opt) => (
                        <Select.Item item={opt} key={opt.value}>
                           <HStack>
                              {opt.icon}
                              {opt.label}
                           </HStack>
                           <Select.ItemIndicator />
                        </Select.Item>
                     ))}
                  </Select.Content>
               </Select.Positioner>
            </Portal>
         </Select.Root>
         <label>{selectedLabel}</label>
      </Flex>
   )
}

export default ProductsSort