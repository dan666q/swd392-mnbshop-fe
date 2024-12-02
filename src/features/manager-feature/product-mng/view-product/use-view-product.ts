import productListApi from '@/services/product-list'
import { useQuery } from '@tanstack/react-query'

export const useViewProductList = () => {
  return useQuery({
    queryKey: ['viewProductList'],
    queryFn: () => productListApi.getProductList(),
  })
}
