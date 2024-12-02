import blogApi from '@/services/blog'
import { queryClient } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddBlog = () => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return blogApi.createBlog(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewBlogList'] })
      notification.success({
        message: 'Add blog success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Add blog failed',
      })
    },
  })
}
