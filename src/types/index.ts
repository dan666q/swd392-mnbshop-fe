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
