import { useCategories } from "@/hooks/useCategories"
import type { ProductsFilterProps } from "@/models/Products/client"
import {
  createListCollection,
  Portal,
  Select,
  type SelectValueChangeDetails,
} from "@chakra-ui/react"

const ProductsFilter = ({ selectedCategory, setSelectedCategory, setSearch }: ProductsFilterProps) => {
  const { data } = useCategories()
  const categories = createListCollection({
    items: data?.map(ctg => ({ label: ctg, value: ctg })) || []
  })

  function onValueChange(e: SelectValueChangeDetails<{
    label: string;
    value: string;
  }>) {
    setSelectedCategory(e.value)
    setSearch("")
  }

  return <Select.Root
    collection={categories}
    value={selectedCategory}
    onValueChange={onValueChange}>
    <Select.HiddenSelect />
    <Select.Control>
      <Select.Trigger>
        <Select.ValueText placeholder="Выберите категорию" />
      </Select.Trigger>
      <Select.IndicatorGroup>
        <Select.ClearTrigger />
        <Select.Indicator />
      </Select.IndicatorGroup>
    </Select.Control>
    <Portal>
      <Select.Positioner>
        <Select.Content>
          {categories?.items.map((ctg) => (
            <Select.Item item={ctg} key={ctg.value}>
              {ctg.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Portal>
  </Select.Root>
}

export default ProductsFilter