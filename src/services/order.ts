import apiInstance from '@/lib/axios'
import { CustomErrorAPIResponse, OrderDetailApiResponse, OrderListApiResponse } from '@/types'
import { AxiosError } from 'axios'

const getOrderList = async () => {
  try {
    const { data } = await apiInstance.get<OrderListApiResponse>(import.meta.env.VITE_ORDER_LIST_API)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getOrderById = async (id: number) => {
  try {
    const { data } = await apiInstance.get<OrderDetailApiResponse>(import.meta.env.VITE_ORDER_DETAIL_API + id)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const updateStatusOrder = async (id: number, status: string) => {
  try {
    await apiInstance.put(import.meta.env.VITE_ORDER_UPDATE_API + id, status)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const orderApi = {
  getOrderList,
  getOrderById,
  updateStatusOrder,
}

export default orderApi
