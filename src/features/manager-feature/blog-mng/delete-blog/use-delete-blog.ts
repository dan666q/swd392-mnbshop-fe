import { queryClient } from '@/constants'
import blogApi from '@/services/blog'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useDeleteBlog = () => {
  return useMutation({
    mutationFn: (blogId: number) => blogApi.deleteBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewBlogList'] })
      notification.success({
        message: 'Delete blog success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Delete blog failed',
      })
    },
  })
}
