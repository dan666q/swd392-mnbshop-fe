import brandApi from '@/services/brand'
import { useQuery } from '@tanstack/react-query'

export const useViewBrandDetail = (id: number) => {
  return useQuery({
    queryKey: ['viewBrandDetail'],
    queryFn: () => brandApi.getBrandById(id),
  })
}
