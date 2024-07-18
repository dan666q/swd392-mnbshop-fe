import { queryClient } from '@/constants'
import productListApi from '@/services/product-list'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDeleteProduct = (id: any) => {
  return useMutation({
    mutationFn: () => {
      return productListApi.disableProduct(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewProductList'] })
      queryClient.invalidateQueries({ queryKey: ['viewProductListManager'] })
      notification.success({
        message: 'Delete product success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Delete product failed',
      })
    },
  })
}
