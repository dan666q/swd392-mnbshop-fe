import type { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

export type DecodedToken = {
  jti: string
  Id: string
  RoleId: string
  Role: string
  exp: number
  iss: string
  aud: string
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
  roleId: number
  profilePic: string
}

export type SignUpForm = {
  username: string
  password: string
  fullName: string
  dateOfBirth: string
  gender: boolean
  address: string
  phone: string
  email: string
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
  brandImg: string
  madeIn: string
  description: string
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

export type ProductDetail = {
  productId: number
  productName: string
  productBrand: string
  productDescription: string
  productImg: string
  productPrice: number
  quantity: number
  byAge: number
  isPreOrder: boolean
  preOrderAmount: number | null
  isPromote: boolean
  isDisable: boolean
  brandId: number
  rate: number
  discount: number
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

export type ProductInOrder = {
  productOrderId: number
  productId: number
  orderId: number
  productName: string
  brandName: string
  image: string
  quantity: number
  unitPrice: number
}

export type OrderData = {
  orderId: number
  staffId: number | null
  deliverAddress: string
  phone: string
  fullName: string
  paymentMethod: string
  status: string
  orderDate: string
  totalPrice: number
  userId: number
  productOrders: ProductInOrder[]
}

export type BlogTableData = {
  key: React.Key
  blogId: number
  title: string
  content: string
  blogImg: string
  createAt: string
  updateAt: string
  usefulVote: number
  notUsefulVote: number
  tags: string
  userId: number
}

export type BlogData = {
  blogId: number
  title: string
  content: string
  blogImg: string
  createAt: string
  updateAt: string
  usefulVote: number
  notUsefulVote: number
  tags: string
  userId: number
}

export type AccountTableData = {
  key: React.Key
  id: number
  username: string
  password: string
  fullName: string
  dateOfBirth: string
  gender: boolean
  address: string
  phone: string
  image: string
  status: string
  isDisable: boolean
  email: string
  roleId: number
}

export type AccountDetail = {
  id: number
  username: string
  password: string
  fullName: string
  dateOfBirth: string
  gender: boolean
  address: string
  phone: string
  image: string
  status: string
  isDisable: boolean
  email: string
  roleId: number
}

export type PromotionTableData = {
  key: React.Key
  promotionId: number
  promotionName: string
  startAt: string
  endAt: string
  status: boolean
  promote: number
  promotionImg: string
}

export type PromotionData = {
  promotionId: number
  promotionName: string
  startAt: string
  endAt: string
  status: boolean
  promote: number
  promotionImg: string
}

// Define a type for Feedback
export type Feedback = {
  feedbackId: number;
  rate: number;
  comment: string;
  replyId: number;
  createAt: string;
  updateAt: string;
  productId: number;
  userId: number;
  orderId: number;
};

// Define a type for Feedback API response
export type FeedbackAPIResponse = {
  message: string;
  httpStatus: string;
  timeStamp: Date;
  data: Feedback;
};

// Define a type for a list of Feedbacks API response
export type FeedbackListAPIResponse = {
  message: string;
  httpStatus: string;
  timeStamp: Date;
  data: Feedback[];
};

export type FeedbackReply = {
  replyId: number;
  feedbackId: number;
  comment: string;
  createAt: string;
  updateAt: string;
  userId: number;
};

export type FeedbackReplyAPIResponse = {
  message: string;
  httpStatus: string;
  timeStamp: Date;
  data: FeedbackReply;
};

export type FeedbackReplyListAPIResponse = {
  message: string;
  httpStatus: string;
  timeStamp: Date;
  data: FeedbackReply[];
};
export type CreateFeedback = Omit<Feedback, 'feedbackId' | 'createAt' | 'updateAt'>;

//vote type
export type VoteBlog = {
  voteId: number;
  voteType: boolean;
  blogId: number;
  userId: number;
};


// API Response
export type CustomErrorAPIResponse = {
  statusCode: number
  message: string
  timestamp: string
}

export type ViewProductListAPIResponse = {
  message: string
  httpStatus: string
  timestamp: string
  data: ProductDetail[]
}

export type ViewProductDetailAPIResponse = {
  data: ProductDetail
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type ViewFavoriteListAPIResponse = {
  favoriteProductId: number
  productName: string
  productPrice: number
  promote: number | null
  favoriteId: number
  favorite: number | null
  productId: number
  product: string | null
}

export type CartAPIResponse = {
  data: CartInfo
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type CreateBrand = {
  brandName: string
  brandImg: string
  madeIn: string
  description: string
}

export type BrandListApiResponse = {
  brandId: string
  brandName: string
  brandImg: string
  madeIn: string
  description: string
}

export type OrderListApiResponse = {
  data: OrderData[]
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type OrderDetailApiResponse = {
  data: OrderData
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type AccountListApiResponse = {
  data: AccountDetail[]
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type AccountDetailApiResponse = {
  data: AccountDetail
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type CartInfo = {
  cartId: number
  totalItem: number
  totalPrice: number
  userId: number
  cartItems: cartItems[]
}

export type cartItems = {
  cartItemId: number
  cartId: number
  productId: number
  productName: string
  image: string
  quantity: number
  unitPrice: number
  brandName: string
}

export type BlogListApiResponse = {
  data: BlogData[]
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type PromotionListApiResponse = {
  data: PromotionData[]
  success: boolean
  message: string
  error: string | null
  errorMessages: string | null
}

export type ProductInPromotion = {
  productId: number
  productBrand: string | null
  rate: number | null
  productName: string
  productDescription: string
  productImg: string
  productPrice: number
  quantity: number
  byAge: number
  isPreOrder: boolean
  preOrderAmount: number
  isPromote: boolean
  isDisable: boolean
  brandId: number
}

export type PromotionFieldInput = {
  promotionName: string
  startAt: string
  endAt: string
  promote: number
  promotionImg: string
}
export type VoteBlogAPIResponse = {
  message: string;
  httpStatus: string;
  timeStamp: Date;
  data: VoteBlog;
};

export type UpdateVoteBlogAPIResponse = {
  message: string;
  httpStatus: string;
  timeStamp: Date;
  data: VoteBlog;
};
