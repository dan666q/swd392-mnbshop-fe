import apiInstance from '@/lib/axios'
import { CustomErrorAPIResponse, DecodedToken, ViewFavoriteListAPIResponse } from '@/types'
import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'

const getFavoriteItem = async () => {
  const decodeToken = (token: string) => {
    const decodedToken = jwtDecode<DecodedToken>(token)
    return decodedToken
  }
  try {
    const { data } = await apiInstance.get<ViewFavoriteListAPIResponse>(import.meta.env.VITE_FAVORITE_API)
    console.log(data)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const favoriteApi = {
  getFavoriteItem,
}

export default favoriteApi
