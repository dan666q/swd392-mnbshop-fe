/* eslint-disable @typescript-eslint/no-explicit-any */
import Dropdown from '@/components/manager-screen/dropdown'
import {
  AccountTableData,
  BlogTableData,
  BrandTableData,
  OrderTableData,
  ProductTableData,
  PromotionTableData,
} from '@/types'
import { Button, Image, TableColumnsType, Tag, Tooltip } from 'antd'
import {
  ViewAccountDropdown,
  ViewBlogDropdown,
  ViewBrandDropdown,
  ViewOrderDropdown,
  ViewProductDropdown,
  ViewPromotionDropdown,
} from './menu-data'
import { getTagColor } from '@/utils'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS_MANAGER } from '@/router'
import dayjs from 'dayjs'
import { POPUP_TITLE, ROLE_MAPPING } from '.'
import Popup from '@/components/manager-screen/popup'
import AddProductPromotion from '@/features/manager-feature/promotion-mng/add-promotion/add-product-promotion'

export const VIEW_PRODUCT_COLS: TableColumnsType<ProductTableData> = [
  {
    title: 'ID',
    dataIndex: 'productId',
    key: 'productId',
    width: 80,
    align: 'center',
  },
  {
    title: 'IMAGE',
    dataIndex: 'productImg',
    key: 'productImg',
    align: 'center',
    render: (productImg: string) => (
      <Image src={productImg} preview={false} className="rounded-xl" alt="Brand Image" width={80} />
    ),
  },
  {
    title: 'PRODUCT NAME',
    dataIndex: 'productName',
    key: 'name',
    align: 'center',
    render: (name: string, record: ProductTableData) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_PRODUCT}/${record.productId}`}>{name}</Link>
    ),
  },
  {
    title: 'BRAND',
    dataIndex: 'productBrand',
    key: 'productBrand',
    width: 200,
    align: 'center',
  },
  {
    title: 'PRICE',
    dataIndex: 'productPrice',
    key: 'productPrice',
    width: 140,
    align: 'center',
    render: (price) => {
      const formatNumber = (number: any) => {
        return new Intl.NumberFormat('vi-VN').format(number)
      }
      return <span>{formatNumber(price)} VND</span>
    },
  },
  {
    title: 'DISCOUNT',
    dataIndex: 'discount',
    key: 'description',
    width: 140,
    align: 'center',
    render: (discount) => <span>{discount}%</span>,
  },
  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
    key: 'image',
    width: 140,
    align: 'center',
    render: (quantity) => <span>{quantity}</span>,
  },
  {
    title: 'STATUS',
    dataIndex: 'isDisable',
    key: 'isDisable',
    width: 140,
    align: 'center',
    render: (isDisable) => {
      return <Tag color={isDisable ? 'error' : 'success'}>{isDisable ? 'Disabled' : 'Active'}</Tag>
    },
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',

    render: (record) => {
      return <Dropdown items={ViewProductDropdown(record.productName, record.productId, record.isDisable)} />
    },
  },
]

export const VIEW_PRODUCT_PROMOTION_COLS: TableColumnsType<ProductTableData> = [
  {
    title: 'ID',
    dataIndex: 'productId',
    key: 'productId',
    width: 80,
    align: 'center',
  },
  {
    title: 'IMAGE',
    dataIndex: 'productImg',
    key: 'productImg',
    align: 'center',
    render: (productImg: string) => (
      <Image src={productImg} preview={false} className="rounded-xl" alt="Brand Image" width={80} />
    ),
  },
  {
    title: 'PRODUCT NAME',
    dataIndex: 'productName',
    key: 'name',
    align: 'center',
    render: (name: string, record: ProductTableData) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_PRODUCT}/${record.productId}`}>{name}</Link>
    ),
  },
  {
    title: 'BRAND',
    dataIndex: 'productBrand',
    key: 'productBrand',
    width: 200,
    align: 'center',
  },
  {
    title: 'PRICE',
    dataIndex: 'productPrice',
    key: 'productPrice',
    width: 140,
    align: 'center',
    render: (price) => <span>${price}</span>,
  },
  {
    title: 'DISCOUNT',
    dataIndex: 'discount',
    key: 'description',
    width: 140,
    align: 'center',
    render: (discount) => <span>{discount}%</span>,
  },
  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
    key: 'image',
    width: 140,
    align: 'center',
    render: (quantity) => <span>{quantity}</span>,
  },
  {
    title: 'STATUS',
    dataIndex: 'isDisable',
    key: 'isDisable',
    width: 140,
    align: 'center',
    render: (isDisable) => {
      return <Tag color={isDisable ? 'error' : 'success'}>{isDisable ? 'Disabled' : 'Active'}</Tag>
    },
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',
    render: (_, record) => {
      return (
        <Popup
          width={700}
          title={POPUP_TITLE.ADD_PRODUCT_PROMOTION}
          type="form"
          content={<AddProductPromotion product={record.productId} />}
        >
          <Button type="primary">Add</Button>
        </Popup>
      )
    },
  },
]

export const VIEW_BRAND_COLS: TableColumnsType<BrandTableData> = [
  {
    title: 'BRAND ID',
    dataIndex: 'brandId',
    key: 'brandId',
    width: 160,
    align: 'center',
  },
  {
    title: 'IMAGE',
    dataIndex: 'brandImg',
    key: 'brandImg',
    align: 'center',
    render: (image: string) => (
      <Image src={image} preview={false} className="rounded-xl" alt="Brand Image" width={80} />
    ),
  },
  {
    title: 'BRAND NAME',
    dataIndex: 'brandName',
    key: 'brandName',
    align: 'center',
    render: (name: string, record: BrandTableData) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_BRAND}/${record.brandId}`}>{name}</Link>
    ),
  },
  {
    title: 'MADE IN',
    dataIndex: 'madeIn',
    key: 'madeIn',
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    align: 'center',
    render: (record) => {
      return <Dropdown items={ViewBrandDropdown(record.brandName, record.brandId)} />
    },
  },
]

export const VIEW_ACCOUNT_COLS: TableColumnsType<AccountTableData> = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    key: 'id',
    align: 'center',
  },
  {
    title: 'FULL NAME',
    dataIndex: 'fullName',
    width: 180,
    key: 'name',
    align: 'center',
    render: (fullName: string, record: AccountTableData) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_ACCOUNT}/${record.id}`}>{fullName}</Link>
    ),
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    width: 200,
    align: 'center',
    ellipsis: true,
    render: (email) => (
      <Tooltip title={email}>
        <span>{email}</span>
      </Tooltip>
    ),
  },
  {
    title: 'PHONE',
    dataIndex: 'phone',
    width: 140,
    key: 'phone',
    align: 'center',
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    width: 150,
    key: 'address',
    align: 'center',
    ellipsis: true,
    render: (address) => <Tooltip title={address}>{address}</Tooltip>,
  },
  {
    title: 'GENDER',
    dataIndex: 'gender',
    width: 90,
    key: 'gender',
    align: 'center',
    render: (gender) => {
      return gender ? <span>Male</span> : <span>Female</span>
    },
  },
  {
    title: 'DATE OF BIRTH',
    dataIndex: 'dateOfBirth',
    width: 140,
    key: 'dateOfBirth',
    align: 'center',
    render: (dateOfBirth) => {
      return <span>{dayjs(dateOfBirth).format('DD/MM/YYYY')}</span>
    },
  },
  {
    title: 'DISABLE',
    dataIndex: 'isDisable',
    key: 'isDisable',
    width: 90,
    align: 'center',
    render: (isDisable) => {
      return <Tag color={isDisable ? 'error' : 'success'}>{isDisable ? 'Disabled' : 'Active'}</Tag>
    },
  },
  {
    title: 'ROLE',
    dataIndex: 'roleId',
    width: 90,
    key: 'roleId',
    align: 'center',
    render: (roleId: string) => {
      const roleName = ROLE_MAPPING[roleId] || 'Unknown'
      return (
        <Tag className="text-center w-36" color={getTagColor(roleId, 'role')}>
          {roleName}
        </Tag>
      )
    },
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',
    render: (record) => {
      return <Dropdown items={ViewAccountDropdown(record.fullName, record.id, record.isDisable)} />
    },
  },
]

export const VIEW_ORDER_COLS: TableColumnsType<OrderTableData> = [
  {
    title: 'ID',
    dataIndex: 'orderId',
    key: 'orderId',
    width: 90,
    align: 'center',
    render: (orderId: string) => <Link to={`${ROUTE_PATHS_MANAGER.M_ORDER}/${orderId}`}>{orderId}</Link>,
  },
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
  },
  {
    title: 'ADDRESS',
    dataIndex: 'deliverAddress',
    key: 'deliverAddress',
    align: 'center',
    ellipsis: true,
    render: (deliverAddress) => <Tooltip title={deliverAddress}>{deliverAddress}</Tooltip>,
  },
  {
    title: 'PHONE',
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (status: string) => {
      return (
        <Tag className="text-center w-36" color={getTagColor(status, 'status')}>
          {status.toUpperCase()}
        </Tag>
      )
    },
  },
  {
    title: 'TOTAL PRICE',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    align: 'center',
    render: (totalPrice: string) => {
      const formatNumber = (number: any) => {
        return new Intl.NumberFormat('vi-VN').format(number)
      }
      return <span>{formatNumber(totalPrice)} VND</span>
    },
  },
  {
    title: 'ORDER DATE',
    dataIndex: 'orderDate',
    key: 'orderDate',
    align: 'center',
    render: (orderDate) => {
      return <span>{dayjs(orderDate).format('DD/MM/YYYY')}</span>
    },
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',

    render: (record) => {
      return <Dropdown items={ViewOrderDropdown(record.orderId)} />
    },
  },
]

export const VIEW_BLOG_COLS: TableColumnsType<BlogTableData> = [
  {
    title: 'ID',
    dataIndex: 'blogId',
    key: 'blogId',
    width: 90,
    align: 'center',
  },
  {
    title: 'IMG',
    dataIndex: 'blogImg',
    key: 'blogImg',
    align: 'center',
    render: (blogImg) => <Image src={blogImg} preview={false} className="rounded-xl" alt="Brand Image" width={100} />,
  },
  {
    title: 'TITLE',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    render: (title, record) => <Link to={`${ROUTE_PATHS_MANAGER.M_BLOG}/${record.blogId}`}>{title}</Link>,
  },
  {
    title: 'CREATE DATE',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: (createdAt) => {
      return <span>{dayjs(createdAt).format('DD/MM/YYYY')}</span>
    },
  },
  {
    title: 'CREATE BY',
    dataIndex: 'userId',
    key: 'userId',
    align: 'center',
  },
  {
    title: 'USEFUL VOTE',
    dataIndex: 'usefulVote',
    key: 'usefulVote',
    align: 'center',
    render: (usefulVote) => {
      return <span>{usefulVote ? usefulVote : 0}</span>
    },
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',
    render: (record) => {
      return <Dropdown items={ViewBlogDropdown(record.title, record.blogId)} />
    },
  },
]

export const VIEW_PROMOTION_COLS: TableColumnsType<PromotionTableData> = [
  {
    title: 'ID',
    dataIndex: 'promotionId',
    key: 'promotionId',
    align: 'center',
  },
  {
    title: 'NAME',
    dataIndex: 'promotionName',
    key: 'promotionName',
    align: 'center',
    render: (promotionName, record) => (
      <Link to={`${ROUTE_PATHS_MANAGER.M_PROMOTION}/${record.promotionId}`}>{promotionName}</Link>
    ),
  },
  {
    title: 'IMG',
    dataIndex: 'promotionImg',
    key: 'promotionImg',
    align: 'center',
    render: (promotionImg) => (
      <Image src={promotionImg} preview={false} className="rounded-xl" alt="Brand Image" width={100} />
    ),
  },
  {
    title: 'START DATE',
    dataIndex: 'startAt',
    key: 'startAt',
    align: 'center',
    render: (startAt) => {
      return <span>{dayjs(startAt).format('DD/MM/YYYY')}</span>
    },
  },
  {
    title: 'END DATE',
    dataIndex: 'endAt',
    key: 'endAt',
    align: 'center',
    render: (endAt) => {
      return <span>{dayjs(endAt).format('DD/MM/YYYY')}</span>
    },
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (status: string) => {
      return (
        <Tag className="text-center w-36" color={getTagColor(status, 'promotion')}>
          {status ? 'ACTIVE' : 'INACTIVE'}
        </Tag>
      )
    },
  },
  {
    title: 'PROMOTE',
    dataIndex: 'promote',
    key: 'promote',
    align: 'center',
    render: (promote: string) => {
      return <span>{promote}%</span>
    },
  },
  {
    title: 'ACTION',
    key: 'operation',
    align: 'center',
    render: (record) => {
      return <Dropdown items={ViewPromotionDropdown(record.promotionId, record.promotionName)} />
    },
  },
]
export const VIEW_ORDER_DETAIL = []
