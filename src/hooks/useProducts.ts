import { useQuery } from '@tanstack/react-query'
import { productService } from '@/services/ProductService'

export const useProducts = () => {
      const { isPending, isError, data } = useQuery({
            queryKey: ['products'],
            queryFn: productService.getProducts,
            // select: (data) => data.data
            select: (data) => data.data.products
      })

      return { isPending, isError, data }
}