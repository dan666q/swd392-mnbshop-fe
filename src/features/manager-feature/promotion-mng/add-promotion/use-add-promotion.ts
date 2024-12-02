import { queryClient } from '@/constants'
import promotionApi from '@/services/promotion'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddPromotion = () => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return promotionApi.addPromotion(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewPromotionList'] })
      notification.success({
        message: 'Add promotion success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Add promotion failed',
      })
    },
  })
}
