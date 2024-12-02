import orderApi from '@/services/order'
import { useQuery } from '@tanstack/react-query'

export const useViewOrderDetail = (id: number) => {
  return useQuery({
    queryKey: ['viewOrderDetail'],
    queryFn: () => orderApi.getOrderById(id),
  })
}
