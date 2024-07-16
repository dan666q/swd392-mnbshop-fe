import { queryClient } from '@/constants'
import accountApi from '@/services/account'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddAccount = () => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return accountApi.addAccount(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accountList'] })
      notification.success({
        message: 'Add success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Add failed',
      })
    },
  })
}
