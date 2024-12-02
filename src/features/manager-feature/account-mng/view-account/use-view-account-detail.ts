import accountApi from '@/services/account'
import { useQuery } from '@tanstack/react-query'

export const useViewAccountDetail = (id: number) => {
  return useQuery({
    queryKey: ['viewAccountDetail'],
    queryFn: () => accountApi.getAccountById(id),
  })
}
