import promotionApi from '@/services/promotion'
import { useQuery } from '@tanstack/react-query'

export const useViewPromotionDetail = (id: number) => {
  return useQuery({
    queryKey: ['viewPromotionDetail'],
    queryFn: () => promotionApi.getPromotionById(id),
  })
}
