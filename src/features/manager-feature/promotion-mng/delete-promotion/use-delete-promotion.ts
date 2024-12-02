import { queryClient } from '@/constants'
import promotionApi from '@/services/promotion'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useDeletePromotion = (id: number) => {
  return useMutation({
    mutationFn: () => {
      return promotionApi.deletePromotion(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewPromotionList'] })
      notification.success({
        message: 'Delete promotion success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Delete promotion failed',
      })
    },
  })
}
