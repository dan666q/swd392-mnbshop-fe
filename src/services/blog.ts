import apiInstance from '@/lib/axios'
import { BlogListApiResponse, CustomErrorAPIResponse, VoteBlog, VoteBlogAPIResponse } from '@/types'
import { AxiosError } from 'axios'

const getBlogList = async () => {
  try {
    const { data } = await apiInstance.get<BlogListApiResponse>(import.meta.env.VITE_BLOG_LIST_API)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getBlogById = async (id: number) => {
  try {
    const { data } = await apiInstance.get(import.meta.env.VITE_BLOG_LIST_API + id)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}
const addVote = async (voteData: { voteType: boolean; blogId: number; userId: number }) => {
  try {
    const url = `${import.meta.env.VITE_VOTE_BLOG_API}${voteData.blogId}?userId=${voteData.userId}`;
    const { data } = await apiInstance.post<VoteBlogAPIResponse>(url, {
      voteType: voteData.voteType,
    });
    return data;
  } catch (error) {
    if (error.isAxiosError) {
      const axiosError = error as AxiosError<CustomErrorAPIResponse>;
      const errorMessage = axiosError.response?.data.message || 'Failed to add vote';
      console.error('Error adding vote:', errorMessage);
      throw new Error(errorMessage);
    } else {
      console.error('Network error:', error.message);
      throw new Error('Network error. Please try again.');
    }
  }

}

const blogApi = {
  getBlogList,
  getBlogById,
  addVote,
}

export default blogApi
