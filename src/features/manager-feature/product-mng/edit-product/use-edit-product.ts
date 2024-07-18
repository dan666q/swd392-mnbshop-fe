/* eslint-disable @typescript-eslint/no-explicit-any */
import { queryClient } from '@/constants'
import productListApi from '@/services/product-list'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useEditProduct = (id: any) => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return productListApi.updateProduct(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewProductDetail'] })
      queryClient.invalidateQueries({ queryKey: ['viewProductListManager'] })
      notification.success({
        message: 'Edit product success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Edit product failed',
      })
    },
  })
}
