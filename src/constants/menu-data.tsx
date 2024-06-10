import Popup from '@/components/manager-screen/popup'
import DeleteProduct from '@/features/manager-feature/product-mng/delete-product'
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
import DisableAccount from '@/features/manager-feature/account-mng/disable-account'
import DeleteBrand from '@/features/manager-feature/brand-mng/delete-brand'

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

export const ViewProductDropdown = (productName: string, productId: string): MenuItem[] => [
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
        Delete Product
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
]

export const ViewBrandDropdown = (brandName: string, brandId: string): MenuItem[] => [
  {
    label: <Link to={brandId}>Edit Brand</Link>,
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

export const ViewAccountDropdown = (fullName: string, id: string): MenuItem[] => [
  {
    label: <Link to={id}>Edit Account</Link>,
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
        Disable Account
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
]
