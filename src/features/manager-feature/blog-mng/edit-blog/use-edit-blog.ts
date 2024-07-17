import blogApi from '@/services/blog'
import { queryClient } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useEditBlog = (userId: number, blogId: number) => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return blogApi.updateBlog(userId, blogId, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewBlogList'] })
      queryClient.invalidateQueries({ queryKey: ['viewBlogDetail'] })
      notification.success({
        message: 'Edit blog success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Edit blog failed',
      })
    },
  })
}
