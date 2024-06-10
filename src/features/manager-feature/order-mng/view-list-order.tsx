import TableData from '@/components/manager-screen/table'
import data from '@/mock/orders.json'
import { VIEW_ORDER_COLS } from '@/constants/table-columns'
import { OrderTableData } from '@/types'

export default function ViewListOrder() {
  const addKeyToData = (dataArray: OrderTableData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: OrderTableData) => {
      return {
        ...item,
        key: item.orderId,
      }
    })
  }
  const dataWithKeys: OrderTableData[] = (data && addKeyToData(data)) || []

  return (
    <div>
      <TableData<OrderTableData>
        columns={VIEW_ORDER_COLS}
        data={dataWithKeys}
        total={data?.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
      />
    </div>
  )
}
