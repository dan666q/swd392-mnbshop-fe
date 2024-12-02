// feedback-api.ts
import apiInstance from '@/lib/axios';
import { FeedbackAPIResponse, FeedbackListAPIResponse, CreateFeedback, CustomErrorAPIResponse } from '@/types';
import { AxiosError } from 'axios';

const getFeedbackList = async () => {
  try {
    const { data } = await apiInstance.get<FeedbackListAPIResponse>(import.meta.env.VITE_FEEDBACK_GET_API);
    return data;
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>;
    throw new Error(errorResponse.response?.data.message);
  }
};

const getFeedbackById = async (id: number) => {
  try {
    const { data } = await apiInstance.get<FeedbackAPIResponse>(`${import.meta.env.VITE_FEEDBACK_GET_API}${id}`);
    return data;
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>;
    throw new Error(errorResponse.response?.data.message);
  }
};

// feedback-api.ts


const addFeedback = async (feedback: CreateFeedback) => {
  try {
    const { productId, orderId, rate, comment, userId, replyId } = feedback;
    const response = await apiInstance.post<FeedbackAPIResponse>(
      `${import.meta.env.VITE_FEEDBACK_ADD_API}${userId}?orderId=${orderId}&productId=${productId}`, // Ensure this endpoint is correct
      { rate, comment, userId, replyId } // Sending the required payload
    );
    return response.data;
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>;
    throw new Error(errorResponse.response?.data.message);
  }
};

  
  
const updateFeedback = async (id: number, feedback: CreateFeedback) => {
  try {
    const { data: response } = await apiInstance.put<FeedbackAPIResponse>(`${import.meta.env.VITE_FEEDBACK_UPDATE_API}${id}`, feedback);
    return response;
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>;
    throw new Error(errorResponse.response?.data.message);
  }
};

const deleteFeedback = async (id: number) => {
  try {
    const response = await apiInstance.delete<FeedbackAPIResponse>(`${import.meta.env.VITE_FEEDBACK_DELETE_API}${id}`);
    return response.data;
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>;
    throw new Error(errorResponse.response?.data.message);
  }
};

const feedbackApi = {
  getFeedbackList,
  getFeedbackById,
  addFeedback,
  updateFeedback,
  deleteFeedback,
};

export default feedbackApi;
