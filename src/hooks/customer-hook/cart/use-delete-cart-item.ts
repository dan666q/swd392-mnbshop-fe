import { queryClient } from '@/constants'
import cartApi from '@/services/cart'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useDeleteCartItem = () => {
  return useMutation({
    mutationFn: (id: number) => cartApi.deleteCartItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      notification.success({
        message: 'Delete success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Delete failed',
      })
    },
  })
}
