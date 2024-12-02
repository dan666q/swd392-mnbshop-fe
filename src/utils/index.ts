import { TOKEN_KEY } from '@/lib/axios'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { jwtDecode } from 'jwt-decode'
import { DecodedToken } from '@/types'
import { AUTHORITIES, ORDER_STATUSES } from '@/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hasAuthority = (authority: string) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return false
  const decodedToken: DecodedToken = jwtDecode(token)
  return decodedToken.role === authority
}

export function getTagColor(tag: string | undefined, type: 'status' | 'promotion' | 'role'): string | undefined {
  switch (type) {
    case 'status':
      switch (tag) {
        case ORDER_STATUSES.PENDING:
          return 'default'
        case ORDER_STATUSES.PROCESSING:
          return 'yellow'
        case ORDER_STATUSES.SHIPPED:
          return 'blue'
        case ORDER_STATUSES.COMPLETED:
          return 'green'
        case ORDER_STATUSES.CANCELLED:
          return 'red'
      }
      break
    case 'role':
      switch (tag) {
        case AUTHORITIES.ADMIN:
          return 'blue'
        case AUTHORITIES.CUSTOMER:
          return 'cyan'
        case AUTHORITIES.STAFF:
          return 'green'
      }
      break
    case 'promotion':
      switch (tag) {
        case true:
          return 'green'
        case false:
          return 'red'
      }
      break
  }
}
