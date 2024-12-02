import { queryClient } from '@/constants'
import brandApi from '@/services/brand'
import { CreateBrand } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddBrand = () => {
  return useMutation({
    mutationFn: (data: CreateBrand) => {
      return brandApi.addBrand(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brandList'] })
      notification.success({
        message: 'Add brand success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Add brand failed',
      })
    },
  })
}
