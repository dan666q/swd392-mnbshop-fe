import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook'
import { setPagination } from '@/lib/redux-toolkit/slices/pagination-slice'
import { setIsChosen, setProductChosen } from '@/lib/redux-toolkit/slices/chosen-slice'
import {
  ProductTableData,
  AccountTableData,
  BrandTableData,
  OrderTableData,
  BlogTableData,
  PromotionTableData,
} from '@/types'
import { Table, TableColumnsType } from 'antd'

type TableDataType =
  | AccountTableData
  | ProductTableData
  | BrandTableData
  | OrderTableData
  | BlogTableData
  | PromotionTableData

interface TableDataProps<T> {
  columns: TableColumnsType<T>
  data: T[] | undefined
  scrollX?: number
  scrollY?: number
  hasRowSelection?: boolean
  isLoading?: boolean
  total?: number
}

export default function TableData<T extends TableDataType>({
  columns,
  data,
  scrollX,
  scrollY,
  hasRowSelection,
  isLoading,
  total,
}: TableDataProps<T>) {
  const dispatch = useAppDispatch()
  const pagination = useAppSelector((state) => state.pagination)

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={data}
      scroll={{ x: scrollX, y: scrollY }}
      pagination={{
        total: total,
        position: ['bottomCenter'],
        pageSizeOptions: [10, 20, 30],
        showSizeChanger: true,
        current: pagination.pageNumber,
        pageSize: pagination.pageSize,
        onChange: (current, size) => {
          dispatch(setPagination({ pageSize: size, pageNumber: current }))
        },
      }}
      rowSelection={
        hasRowSelection
          ? {
              type: 'checkbox',
              onChange(selectedRowKeys) {
                dispatch(setIsChosen(selectedRowKeys.length > 0))
                dispatch(setProductChosen(selectedRowKeys.map(String)))
              },
            }
          : undefined
      }
      size="middle"
    />
  )
}
