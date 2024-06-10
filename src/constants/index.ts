import { QueryClient } from '@tanstack/react-query'

export const dateFormatList = ['YYYY-MM-DD', 'DD-MM-YYYY']

export const AUTHORITIES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
  STAFF: 'staff',
  GUEST: 'guest',
}

export const ORDER_STATUSES = {
  WAITING: 'waiting',
  PROCESSING: 'processing',
  DELIVERY: 'delivery',
  DONE: 'done',
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
    },
  },
})

// Mã code màu
export const THEME_CODES = {
  PRIMARY: '#f2a7b1',
  SECONDARY: '#98deea',
  BACKGROUND: '#ffffff',
  ERROR: '#f03e3e',
  SUCCESS: '#00c48c',
  WARNING: '#ff9900',
  UNACTICE: '#a0a0a0',
  PRIMARY_HOVER: '#4F6181',
  ORANGE: '#D45B13',
  GREEN: '#2F903F',
  FOREGROUND: '#EDF2F7',
  UNACTIVE: '#65748C',
}

// Regex số điện thoại VN
export const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const PAGINATION = {
  PAGE_SIZE: 10,
  PAGE_NUM: 1,
  DEFAULT_SORT: 'id',
  DEFAULT_SORT_DIR: 'asc',
}

// Tiêu đề popup
export const POPUP_TITLE = {
  FILTER: 'Filter',
  IMPORT_PRODUCT: 'Add new product',
  UPDATE_PRODUCT: 'Update product',
  DELETE_PRODUCT: 'Delete product',
}
