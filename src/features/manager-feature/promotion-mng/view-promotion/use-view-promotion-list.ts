import promotionApi from '@/services/promotion'
import { useQuery } from '@tanstack/react-query'

export const useViewPromotionList = () => {
  return useQuery({
    queryKey: ['viewPromotionList'],
    queryFn: () => promotionApi.getPromotionList(),
  })
}
