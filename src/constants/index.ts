import { QueryClient } from '@tanstack/react-query'

export const dateFormatList = ['YYYY-MM-DD', 'DD-MM-YYYY']

export const AUTHORITIES = {
  ADMIN: 1,
  STAFF: 2,
  CUSTOMER: 3,
}

type RoleMappingType = {
  [key: string]: string
}

export const ROLE_MAPPING: RoleMappingType = {
  '1': 'Admin',
  '2': 'Staff',
  '3': 'Customer',
}

export const ORDER_STATUSES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipping',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
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
  ADD_PRODUCT: 'Add new product',
  UPDATE_PRODUCT: 'Update product',
  DELETE_PRODUCT: 'Delete product',

  ADD_ACCOUNT: 'Add new account',
  UPDATE_ACCOUNT: 'Update account',
  DISABLE_ACCOUNT: 'Disable account',

  ADD_ORDER: 'Add new order',
  UPDATE_ORDER: 'Update order',
  DELETE_ORDER: 'Delete order',

  ADD_BRAND: 'Add new brand',
  UPDATE_BRAND: 'Update brand',
  DELETE_BRAND: 'Delete brand',

  ADD_BLOG: 'Add new blog',
  UPDATE_BLOG: 'Update blog',
  DELETE_BLOG: 'Delete blog',

  ADD_PROMOTION: 'Add new promotion',
  UPDATE_PROMOTION: 'Update promotion',
  DELETE_PROMOTION: 'Delete promotion',

  ADD_PRODUCT_PROMOTION: 'Add new product promotion',
  UPDATE_PRODUCT_PROMOTION: 'Update product promotion',
  DELETE_PRODUCT_PROMOTION: 'Delete product promotion',
}

export const FILTER_OPTIONS = {
  ID: 'id',
  Fullname: 'fullname',
  Email: 'email',
  Phone: 'phone',
  Status: 'status',
  Role: 'role',
}

export const ERROR_MESSAGES = {
  EM1: 'Field is required',
}
