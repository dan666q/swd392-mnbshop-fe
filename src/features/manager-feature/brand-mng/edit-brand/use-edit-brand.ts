import brandApi from '@/services/brand'
import { useMutation } from '@tanstack/react-query'
import { CreateBrand } from '@/types'
import { queryClient } from '@/constants'
import { notification } from 'antd'

export const useEditBrand = (id: number) => {
  return useMutation({
    mutationFn: (data: CreateBrand) => {
      return brandApi.updateBrand(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brandList'] })
      queryClient.invalidateQueries({ queryKey: ['viewBrandDetail'] })
      notification.success({
        message: 'Edit brand success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Edit brand failed',
      })
    },
  })
}
