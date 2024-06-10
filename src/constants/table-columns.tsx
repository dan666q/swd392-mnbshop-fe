import { ProductTableData } from '@/types'
import { TableColumnsType } from 'antd'
import { ViewProductDropdown } from './menu-data'
import Dropdown from '@/components/manager-screen/dropdown'

export const VIEW_PRODUCT_COLS: TableColumnsType<ProductTableData> = [
  {
    title: 'PRODUCT ID',
    dataIndex: 'productId',
    key: 'id',
    width: 160,
    align: 'center',
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
    width: 120,
    align: 'center',
  },
  {
    title: 'DISCOUNT',
    dataIndex: 'discount',
    key: 'description',
    width: 120,
    align: 'center',
  },
  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
    key: 'image',
    width: 120,
    align: 'center',
  },
  {
    title: 'BY AGE',
    dataIndex: 'byAge',
    key: 'createdAt',
    width: 120,
    align: 'center',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 80,
    align: 'center',

    render: (record) => {
      return <Dropdown items={ViewProductDropdown(record.productName, record.productId)} />
    },
  },
]
