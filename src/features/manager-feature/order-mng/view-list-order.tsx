import TableData from '@/components/manager-screen/table'
import { VIEW_ORDER_COLS } from '@/constants/table-columns'
import { DecodedToken, OrderData, OrderTableData } from '@/types'
import { useViewOrderList } from './use-view-order-list'
import { useMemo } from 'react'
import { jwtDecode } from 'jwt-decode'
import { TOKEN_KEY } from '@/lib/axios'

const decodeToken = (token: string) => {
  const decodedToken = jwtDecode<DecodedToken>(token)
  return decodedToken
}

export default function ViewListOrder() {
  const { data, isLoading } = useViewOrderList()
  const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId

  const staffData = useMemo(() => {
    const staffId = localStorage.getItem('userId')
    if (!data || !staffId) return []
    return data.filter((order: OrderData) => order.staffId === parseInt(staffId))
  }, [data])

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
      {roleId == '1' ? (
        <TableData<OrderTableData>
          columns={VIEW_ORDER_COLS}
          data={dataWithKeys}
          total={data?.length}
          scrollX={1400}
          scrollY={620}
          hasRowSelection
          isLoading={isLoading}
        />
      ) : (
        <TableData<OrderTableData>
          columns={VIEW_ORDER_COLS}
          data={staffData}
          total={data?.length}
          scrollX={1400}
          scrollY={620}
          hasRowSelection
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
