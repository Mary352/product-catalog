import { useQuery } from '@tanstack/react-query'
import { productService } from '@/services/ProductService'
import type { ProductsByCategoryProps } from '@/models/Products/client'

export const useProductsByCategory = ({ category }: ProductsByCategoryProps) => {
      const { isPending, isError, data } = useQuery({
            queryKey: ['product_by_category'],
            queryFn: () => productService.getProductsByCategory({ category }),
            select: (data) => data.data,
            enabled: !!category
      })

      return { isPending, isError, data }
}