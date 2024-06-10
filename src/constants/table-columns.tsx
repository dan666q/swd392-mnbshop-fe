import { AccountTableData, BrandTableData, OrderTableData, ProductTableData } from '@/types'
import { Image, TableColumnsType, Tag, Tooltip, Typography } from 'antd'
import { ViewAccountDropdown, ViewBrandDropdown, ViewOrderDropdown, ViewProductDropdown } from './menu-data'
import Dropdown from '@/components/manager-screen/dropdown'
import { getTagColor } from '@/utils'

export const VIEW_PRODUCT_COLS: TableColumnsType<ProductTableData> = [
  {
    title: 'PRODUCT ID',
    dataIndex: 'productId',
    key: 'id',
    width: 160,
    align: 'center',
    sorter: {
      compare: (a, b) => a.productId.localeCompare(b.productId),
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'PRODUCT NAME',
    dataIndex: 'productName',
    key: 'name',
    align: 'center',
  },
  {
    title: 'BRAND',
    dataIndex: 'brand',
    key: 'category',
    width: 200,
    align: 'center',
  },
  {
    title: 'PRICE',
    dataIndex: 'price',
    key: 'price',
    width: 140,
    align: 'center',
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
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',

    render: (record) => {
      return <Dropdown items={ViewProductDropdown(record.productName, record.productId)} />
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
    sorter: {
      compare: (a, b) => a.brandId.localeCompare(b.brandId),
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'IMAGE',
    dataIndex: 'image',
    key: 'image',
    width: 200,
    align: 'center',
    render: (imageUrl) => <Image src={imageUrl} preview={false} className="rounded-xl" alt="Brand Image" width={80} />,
  },
  {
    title: 'BRAND NAME',
    dataIndex: 'brandName',
    key: 'brandName',
    align: 'center',
  },
  {
    title: '#PRODUCTS',
    dataIndex: 'numberOfProducts',
    key: 'numberOfProducts',
    width: 200,
    align: 'center',
  },
  {
    title: 'UPDATE AT',
    dataIndex: 'updateAt',
    key: 'updateAt',
    width: 200,
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 100,
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
    sorter: {
      compare: (a, b) => a.id.localeCompare(b.id),
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'FULL NAME',
    dataIndex: 'fullName',
    width: 180,
    key: 'name',
    align: 'center',
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    ellipsis: true,
    render: (email) => (
      <Tooltip title={email}>
        <Typography.Text>{email}</Typography.Text>
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
  },
  {
    title: 'DATE OF BIRTH',
    dataIndex: 'dob',
    width: 140,
    key: 'dob',
    align: 'center',
  },
  {
    title: 'DISABLE',
    dataIndex: 'isDisable',
    key: 'isDisable',
    width: 90,
    align: 'center',
    render: (record) => {
      return record ? <span className="text-red-500">Yes</span> : <span className="text-green-500">No</span>
    },
  },
  {
    title: 'ROLE',
    dataIndex: 'role',
    width: 100,
    key: 'role',
    align: 'center',
    render: (role: string) => {
      return (
        <Tag className="text-center w-36" color={getTagColor(role, 'role')}>
          {role.toUpperCase()}
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
      return <Dropdown items={ViewAccountDropdown(record.fullName, record.id)} />
    },
  },
]

export const VIEW_ORDER_COLS: TableColumnsType<OrderTableData> = [
  {
    title: 'ORDER ID',
    dataIndex: 'orderId',
    key: 'orderId',
    width: 160,
    align: 'center',
    sorter: {
      compare: (a, b) => a.orderId.localeCompare(b.orderId),
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'userName',
    key: 'userName',
    align: 'center',
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    ellipsis: true,
    render: (address) => <Tooltip title={address}>{address}</Tooltip>,
  },
  {
    title: 'PHONE',
    dataIndex: 'phone',
    width: 140,
    key: 'phone',
    align: 'center',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    width: 140,
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
    width: 140,
    key: 'totalPrice',
    align: 'center',
    render: (totalPrice: string) => {
      return <span>{totalPrice}$</span>
    },
  },
  {
    title: 'ORDER DATE',
    dataIndex: 'orderDate',
    width: 140,
    key: 'orderDate',
    align: 'center',
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
