import accountApi from '@/services/account'
import { useQuery } from '@tanstack/react-query'

export const useViewAccountList = () => {
  return useQuery({
    queryKey: ['accountList'],
    queryFn: () => accountApi.getListAccount(),
  })
}
