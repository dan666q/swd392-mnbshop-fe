import TableData from '@/components/manager-screen/table'
import { VIEW_ORDER_COLS } from '@/constants/table-columns'
import { OrderData, OrderTableData } from '@/types'
import { useViewOrderList } from './use-view-order-list'

export default function ViewListOrder() {
  const { data, isLoading } = useViewOrderList()
  const addKeyToData = (dataArray: OrderTableData[] | OrderData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: OrderTableData | OrderData) => {
      return {
        ...item,
        key: item.orderId,
      }
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataWithKeys: any = (data && addKeyToData(data)) || []

  return (
    <div>
      <TableData<OrderTableData>
        columns={VIEW_ORDER_COLS}
        data={dataWithKeys}
        total={data?.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
        isLoading={isLoading}
      />
    </div>
  )
}
