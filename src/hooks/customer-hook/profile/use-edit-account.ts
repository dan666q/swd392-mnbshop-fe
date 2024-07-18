// Assuming this is your `use-edit-account` custom hook

import { useMutation } from '@tanstack/react-query';
import accountApi from '@/services/account'; // Import your API functions
import { notification } from 'antd';

const useEditAccount = (userId) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await accountApi.updateAccount(userId, data); // Assuming `updateAccount` is correctly implemented in `accountApi`
      return response; // Return the response if successful
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || 'Failed to update account'; // Extract error message from response
      notification.error({
        message: errorMessage,
      });
      throw new Error(errorMessage); // Throw an error to be caught by the component
    },
    onSuccess: () => {
      notification.success({
        message: 'Account updated successfully',
      });
      window.location.reload(); // Reload the current page
    },
  });
};

export default useEditAccount;
