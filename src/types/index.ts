import type { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

export type DecodedToken = {
  sub: string
  role: string
  iat: number
  exp: number
}

export type InputsType = {
  key: string
  label: string
  type: 'text' | 'input' | 'select' | 'date' | 'badge' | 'textarea'
  isAllowEdit?: boolean
  options?: { key: string; value: string | number }[]
}

export type InputsField = {
  view?: InputsType[]
  viewCertification?: InputsType[]
  edit?: InputsType[]
  editStatus?: InputsType[]
  editCertification?: InputsType[]
  add?: InputsType[]
}

export type AuthUser = {
  id: number
  fullName: string
  email: string
  dob: string
  address: string
  gender: string
  phone: string
  username: string
  role: string
  profilePic: string
}

export type GetCurrentUserAPIResponse = {
  message: string
  httpStatus: string
  timeStamp: Date
  data: AuthUser
}

export type LoginUserAPIResponse = {
  message: string
  httpStatus: string
  timeStamp: Date
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type BrandTableData = {
  key: React.Key
  brandId: string
  brandName: string
  image: string
  numberOfProducts: number
  updateAt: string
}

export type ProductTableData = {
  key: React.Key
  productId: string
  productName: string
  brand: string
  price: number
  discount: number
  quantity: number
  byAge: number
}

export type OrderTableData = {
  orderId: string
  userId: string
  userName: string
  address: string
  phone: string
  productId: string[]
  orderDate: string
  status: string
  totalPrice: number
}

export type AccountTableData = {
  key: React.Key
  id: string
  fullName: string
  phone: string
  email: string
  address: string
  gender: string
  dob: string
  isDisable: boolean
  role: string
}
// interface product
export type CustomerProductCard = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  liked: boolean;
}
