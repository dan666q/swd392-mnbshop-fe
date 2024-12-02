import blogApi from '@/services/blog'
import { useQuery } from '@tanstack/react-query'

export const useViewBlogList = () => {
  return useQuery({
    queryKey: ['viewBlogList'],
    queryFn: () => blogApi.getBlogList(),
  })
}
