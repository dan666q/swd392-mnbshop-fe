import LoginLayout from '@/layouts/login-layout'
import ManagerDefaultLayout from '@/layouts/manager-layouts/default-layout'
import BlogDetails from '@/pages/customer-pages/blog-details'
import BlogsList from '@/pages/customer-pages/blogs-list'
import CustomerProfile from '@/pages/customer-pages/customer-profile'
import HomePage from '@/pages/customer-pages/home-page'
import ProductDetail from '@/pages/customer-pages/product-detail'
import ProductsList from '@/pages/customer-pages/products-list'
import ForgotPassword from '@/pages/forgot-password'
import Login from '@/pages/login'
import SignUp from '@/pages/sign-up'
import CustomerEditProfile from '@/pages/customer-pages/customer-edit-profile '
import FavouriteList from '@/pages/customer-pages/favourite-list'
import Cart from '@/pages/customer-pages/cart'
import Checkout from '@/pages/customer-pages/checkout'
import ProductManager from '@/pages/manager-pages/product-manager'
import AccountManager from '@/pages/manager-pages/account-manager'
import Dashboard from '@/pages/manager-pages/dashboard'
import PromotionManager from '@/pages/manager-pages/promotion-manager'
import BlogManager from '@/pages/manager-pages/blog-manager'
import NotFound from '@/pages/not-found'
import OrderManager from '@/pages/manager-pages/order-manager'
import BrandManager from '@/pages/manager-pages/brand-manager'
import { AUTHORITIES } from '@/constants'

export const ROUTE_PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  FORGOT: '/forgot',
  SIGNUP: '/signup',
  PRODUCT: '/product',
  BLOG: '/blog',
}

export const ROUTE_PATHS_CUSTOMER = {
  ROOT: '/',
  FAVOURITE: '/favourite',
  CART: '/cart',
  CHECKOUT: '/checkout',
  PROFILE: '/customer-profile',
  EDIT_PROFILE: '/edit-profile',
}

export const ROUTE_PATHS_MANAGER = {
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  M_ACCOUNT: '/accounts',
  M_BRAND: '/brands',
  M_PRODUCT: '/products',
  M_ORDER: '/orders',
  M_BLOG: '/blogs',
  M_PROMOTION: '/promotion',
}

export const routes = [
  // LOGIN ROUTE
  {
    path: ROUTE_PATHS.LOGIN,
    name: 'Login',
    component: Login,
    layout: LoginLayout,
  },
  {
    path: ROUTE_PATHS.SIGNUP,
    name: 'Signup',
    component: SignUp,
    layout: LoginLayout,
  },
  {
    path: ROUTE_PATHS.FORGOT,
    name: 'Forgot',
    component: ForgotPassword,
    layout: LoginLayout,
  },
  // CUSTOMER ROUTE
  {
    path: ROUTE_PATHS_CUSTOMER.ROOT,
    name: 'Home',
    component: HomePage,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS.PRODUCT,
    name: 'Product',
    component: ProductsList,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: `${ROUTE_PATHS.PRODUCT}/:productId`,
    name: 'Product detail',
    component: ProductDetail,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS.BLOG,
    name: 'Blog',
    component: BlogsList,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: `${ROUTE_PATHS.BLOG}/:blogId`,
    name: 'Blog detail',
    component: BlogDetails,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_CUSTOMER.FAVOURITE,
    name: 'Favourite',
    component: FavouriteList,
    layout: null,
    roles: [AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_CUSTOMER.CART,
    name: 'Cart',
    component: Cart,
    layout: null,
    roles: [AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_CUSTOMER.CHECKOUT,
    name: 'Checkout',
    component: Checkout,
    layout: null,
    roles: [AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_CUSTOMER.PROFILE,
    name: 'Profile',
    component: CustomerProfile,
    layout: null,
    roles: [AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_CUSTOMER.EDIT_PROFILE,
    name: 'Edit profile',
    component: CustomerEditProfile,
    layout: null,
    roles: [AUTHORITIES.CUSTOMER],
  },
  // MANAGER ROUTE
  {
    path: ROUTE_PATHS_MANAGER.DASHBOARD,
    name: 'Admin Dashboard',
    component: Dashboard,
    layout: ManagerDefaultLayout,
    private: false,
    roles: [AUTHORITIES.ADMIN],
  },
  {
    path: ROUTE_PATHS_MANAGER.M_ACCOUNT,
    name: 'Account Manager',
    component: AccountManager,
    layout: ManagerDefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN],
  },
  {
    path: ROUTE_PATHS_MANAGER.M_BRAND,
    name: 'Brand Manager',
    component: BrandManager,
    layout: ManagerDefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN],
  },
  {
    path: ROUTE_PATHS_MANAGER.M_PRODUCT,
    name: 'Product Manager',
    component: ProductManager,
    layout: ManagerDefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN],
  },
  {
    path: ROUTE_PATHS_MANAGER.M_ORDER,
    name: 'Order Manager',
    component: OrderManager,
    layout: ManagerDefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN],
  },
  {
    path: ROUTE_PATHS_MANAGER.M_BLOG,
    name: 'Blog',
    component: BlogManager,
    layout: ManagerDefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN],
  },
  {
    path: ROUTE_PATHS_MANAGER.M_PROMOTION,
    name: 'Promotion Manager',
    component: PromotionManager,
    layout: ManagerDefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN],
  },
  {
    path: `*`,
    name: 'Not found',
    component: NotFound,
    private: true,
    roles: [AUTHORITIES.ADMIN],
  },
]
