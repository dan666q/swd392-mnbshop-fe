import brandApi from '@/services/brand'
import { useQuery } from '@tanstack/react-query'

export const useViewBrandList = () => {
  return useQuery({
    queryKey: ['brandList'],
    queryFn: () => brandApi.getBrandList(),
  })
}
