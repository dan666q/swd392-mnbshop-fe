import Popup from '@/components/manager-screen/popup'
import DeleteProduct from '@/features/manager-feature/delete-product'
import {
  GiftOutlined,
  UserOutlined,
  CodepenOutlined,
  BarChartOutlined,
  ReadOutlined,
  CloseCircleOutlined,
  EditOutlined,
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
    label: 'Products',
    key: '/products' || ROUTE_PATHS_MANAGER.M_PRODUCT,
    icon: <CodepenOutlined />,
  },
  {
    label: 'Blogs',
    key: '/blogs' || ROUTE_PATHS_MANAGER.M_BLOG,
    icon: <ReadOutlined />,
  },
  {
    label: 'Promotion',
    key: '/promotion' || ROUTE_PATHS_MANAGER.M_PROMOTION,
    icon: <GiftOutlined />,
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
