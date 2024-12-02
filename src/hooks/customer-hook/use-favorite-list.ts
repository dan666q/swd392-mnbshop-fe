import favoriteApi from '@/services/favorite'
import { useQuery } from '@tanstack/react-query'

export const useFavoriteList = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => favoriteApi.getFavoriteItem(),
  })
}
