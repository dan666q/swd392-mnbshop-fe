import cartApi from '@/services/cart'
import { queryClient } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddCartItem = () => {
  return useMutation({
    mutationFn: ({ productId, quantity }: { productId: number; quantity: number }) =>
      cartApi.addCartItem(productId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      notification.success({
        message: 'Add product success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Add product failed',
      })
    },
  })
}
