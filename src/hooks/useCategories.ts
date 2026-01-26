import { useQuery } from '@tanstack/react-query'
import { productService } from '@/services/ProductService'

export const useCategories = () => {
      const { isPending, isError, data } = useQuery({
            queryKey: ['categories'],
            queryFn: productService.getCategories,
            select: (data) => data.data
      })

      return { isPending, isError, data }
}