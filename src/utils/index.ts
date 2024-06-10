import { TOKEN_KEY } from '@/lib/axios'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { jwtDecode } from 'jwt-decode'
import { DecodedToken } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hasAuthority = (authority: string) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return false
  const decodedToken: DecodedToken = jwtDecode(token)
  return decodedToken.role === authority
}
