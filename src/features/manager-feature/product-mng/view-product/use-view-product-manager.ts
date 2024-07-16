import productListApi from '@/services/product-list'
import { useQuery } from '@tanstack/react-query'

export const useViewProductListManager = () => {
  return useQuery({
    queryKey: ['viewProductListManager'],
    queryFn: () => productListApi.getManagerProductList(),
  })
}
