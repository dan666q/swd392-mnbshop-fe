import TableData from '@/components/manager-screen/table'
import data from '@/mock/account.json'
import { VIEW_ACCOUNT_COLS } from '@/constants/table-columns'
import { AccountTableData } from '@/types'

export default function ViewListAccount() {
  const addKeyToData = (dataArray: AccountTableData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: AccountTableData) => {
      return {
        ...item,
        key: item.id,
      }
    })
  }
  const dataWithKeys: AccountTableData[] = (data && addKeyToData(data)) || []

  return (
    <div>
      <TableData<AccountTableData>
        columns={VIEW_ACCOUNT_COLS}
        data={dataWithKeys}
        total={data?.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
      />
    </div>
  )
}
