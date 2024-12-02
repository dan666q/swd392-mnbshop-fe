import blogApi from '@/services/blog'
import { useQuery } from '@tanstack/react-query'

export const useViewBlogDetail = (id: number) => {
  return useQuery({
    queryKey: ['viewBlogDetail'],
    queryFn: () => blogApi.getBlogById(id),
  })
}
