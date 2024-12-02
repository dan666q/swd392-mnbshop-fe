import { queryClient } from '@/constants'
import brandApi from '@/services/brand'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useDeleteBrand = (id: number) => {
  return useMutation({
    mutationFn: () => {
      return brandApi.deleteBrand(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brandList'] })
      queryClient.invalidateQueries({ queryKey: ['viewBrandDetail'] })
      notification.success({
        message: 'Delete brand success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Delete brand failed',
      })
    },
  })
}
