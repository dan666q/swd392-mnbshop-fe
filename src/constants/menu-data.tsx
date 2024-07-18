import Popup from '@/components/manager-screen/popup'
import DisableAccount from '@/features/manager-feature/account-mng/delete-account/disable-account'
import DeleteBrand from '@/features/manager-feature/brand-mng/delete-brand/delete-brand'
import DeleteBlog from '@/features/manager-feature/blog-mng/delete-blog/delete-blog'
import DeletePromotion from '@/features/manager-feature/promotion-mng/delete-promotion/delete-promotion'
import DeleteProduct from '@/features/manager-feature/product-mng/delete-product/delete-product'
import {
  GiftOutlined,
  UserOutlined,
  CodepenOutlined,
  BarChartOutlined,
  ReadOutlined,
  CloseCircleOutlined,
  EditOutlined,
  BoldOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { MenuItem } from '@/types'
import { ROUTE_PATHS_MANAGER } from '@/router'
import { Link } from 'react-router-dom'
import { POPUP_TITLE } from '.'

// TODO: eslint-disable
// eslint-disable-next-line react-refresh/only-export-components
export const NavigatorItems: MenuItem[] = [
  {
    label: 'Dashboard',
    key: '/dashboard' || ROUTE_PATHS_MANAGER.DASHBOARD,
    icon: <BarChartOutlined />,
  },
  {
    label: 'Accounts',
    key: '/accounts' || ROUTE_PATHS_MANAGER.M_ACCOUNT,
    icon: <UserOutlined />,
  },
  {
    label: 'Brands',
    key: '/brands' || ROUTE_PATHS_MANAGER.M_BRAND,
    icon: <BoldOutlined />,
  },
  {
    label: 'Products',
    key: '/products' || ROUTE_PATHS_MANAGER.M_PRODUCT,
    icon: <CodepenOutlined />,
  },
  {
    label: 'Orders',
    key: '/orders' || ROUTE_PATHS_MANAGER.M_ORDER,
    icon: <ShoppingCartOutlined />,
  },
  {
    label: 'Promotion',
    key: '/promotion' || ROUTE_PATHS_MANAGER.M_PROMOTION,
    icon: <GiftOutlined />,
  },
  {
    label: 'Blogs',
    key: '/blogs' || ROUTE_PATHS_MANAGER.M_BLOG,
    icon: <ReadOutlined />,
  },
]

// eslint-disable-next-line react-refresh/only-export-components
export const NavigatorItemsStaff: MenuItem[] = [
  {
    label: 'Orders',
    key: '/orders' || ROUTE_PATHS_MANAGER.M_ORDER,
    icon: <ShoppingCartOutlined />,
  },
  {
    label: 'Blogs',
    key: '/blogs' || ROUTE_PATHS_MANAGER.M_BLOG,
    icon: <ReadOutlined />,
  },
]

export const ViewProductDropdown = (productName: string, productId: string, isDisabled: boolean): MenuItem[] => [
  {
    label: <Link to={productId}>Edit Product</Link>,
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        width={430}
        type="confirm"
        title={POPUP_TITLE.DELETE_PRODUCT}
        content={<DeleteProduct productName={productName} productId={productId} />}
      >
        {isDisabled ? 'Enable Product' : 'Disable Product'}
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
]

export const ViewBrandDropdown = (brandName: string, brandId: number): MenuItem[] => [
  {
    label: <Link to={`${ROUTE_PATHS_MANAGER.M_BRAND}/${brandId}`}>Edit Brand</Link>,
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        width={430}
        type="confirm"
        title={POPUP_TITLE.DELETE_BRAND}
        content={<DeleteBrand brandName={brandName} brandId={brandId} />}
      >
        Delete Brand
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
]

export const ViewOrderDropdown = (orderId: string): MenuItem[] => [
  {
    label: <Link to={orderId}>View Order</Link>,
    key: 'edit',
    icon: <EditOutlined />,
  },
]

export const ViewAccountDropdown = (fullName: string, id: number, isDisabled: boolean): MenuItem[] => [
  {
    label: <Link to={`${ROUTE_PATHS_MANAGER.M_ACCOUNT}/${id}`}>Edit Account</Link>,
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        width={430}
        type="confirm"
        title={POPUP_TITLE.DISABLE_ACCOUNT}
        content={<DisableAccount fullName={fullName} id={id} />}
      >
        {isDisabled ? 'Enable Account' : 'Disable Account'}
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
]

export const ViewBlogDropdown = (title: string, blogId: number): MenuItem[] => [
  {
    label: <Link to={`${ROUTE_PATHS_MANAGER.M_BLOG}/${blogId}`}>Edit Blog</Link>,
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        width={430}
        type="confirm"
        title={POPUP_TITLE.DELETE_BLOG}
        content={<DeleteBlog title={title} blogId={blogId} />}
      >
        Delete Blog
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
]

export const ViewPromotionDropdown = (promotionName: number, promotionId: string): MenuItem[] => [
  {
    label: <Link to={`${ROUTE_PATHS_MANAGER.M_PROMOTION}/${promotionId}`}>Edit Promotion</Link>,
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        width={430}
        type="confirm"
        title={POPUP_TITLE.DELETE_PROMOTION}
        content={<DeletePromotion promotionId={promotionId} promotionName={promotionName} />}
      >
        Delete Promotion
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
]
