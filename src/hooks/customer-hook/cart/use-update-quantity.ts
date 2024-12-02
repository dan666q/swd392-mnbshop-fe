import { queryClient } from '@/constants'
import cartApi from '@/services/cart'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useUpdateQuantity = () => {
  return useMutation({
    mutationFn: ({ productId, quantity }: { productId: number; quantity: number }) =>
      cartApi.updateQuantity(productId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      notification.success({
        message: 'Update success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Update failed',
      })
    },
  })
}
