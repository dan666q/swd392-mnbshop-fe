import orderApi from '@/services/order'
import { useQuery } from '@tanstack/react-query'

export const useViewOrderUserDetail = (id: number) => {
  return useQuery({
    queryKey: ['viewOrderDetail'],
    queryFn: () => orderApi.getOrderById(id),
  })
}
