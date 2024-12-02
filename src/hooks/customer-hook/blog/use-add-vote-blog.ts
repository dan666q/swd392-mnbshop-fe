import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import blogApi from '@/services/blog'
import { queryClient } from '@/constants'

export const useAddVote = () => {
  return useMutation({
    mutationFn: blogApi.addVote,
    onSuccess: () => {
      queryClient.invalidateQueries(['blogDetail'])
      notification.success({
        message: 'Vote added successfully',
      })
    },
    onError: (error: any) => {
      notification.error({
        message: 'Failed to add vote',
        description: error.message,
      })
    },
  })
}
