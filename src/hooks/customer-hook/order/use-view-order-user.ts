import orderApi from '@/services/order'
import { useQuery } from '@tanstack/react-query'

export const useViewOrderUserList = () => {
  return useQuery({
    queryKey: ['orderList'],
    queryFn: () => orderApi.getOrderList(),
  })
}
