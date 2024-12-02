import orderApi from '@/services/order'
import { useQuery } from '@tanstack/react-query'

export const useViewOrderList = () => {
  return useQuery({
    queryKey: ['orderList'],
    queryFn: () => orderApi.getOrderList(),
  })
}
