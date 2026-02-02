import { useQuery } from '@tanstack/react-query'
import { productService } from '@/services/ProductService'

export const useProducts = () => {
      const { isPending, isError, data } = useQuery({
            queryKey: ['products'],
            queryFn: productService.getProducts,
            select: (data) => data.data
      })

      return { isPending, isError, data }
}