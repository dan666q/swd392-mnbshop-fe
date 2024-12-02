import { queryClient } from '@/constants'
import accountApi from '@/services/account'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useDisableAccount = (id: number) => {
  return useMutation({
    mutationFn: () => accountApi.disableAccount(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accountList'] })
      queryClient.invalidateQueries({ queryKey: ['viewAccountDetail'] })
      notification.success({
        message: 'Disable success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Disable failed',
      })
    },
  })
}
