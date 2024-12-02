import cartApi from '@/services/cart'
import { useQuery } from '@tanstack/react-query'

export const useCartItem = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.getCartItem(),
  })
}
