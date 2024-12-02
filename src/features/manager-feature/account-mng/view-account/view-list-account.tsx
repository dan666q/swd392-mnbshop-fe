import TableData from '@/components/manager-screen/table'
import { VIEW_ACCOUNT_COLS } from '@/constants/table-columns'
import { AccountDetail, AccountTableData } from '@/types'
import { useViewAccountList } from './use-view-account-list'

export default function ViewListAccount() {
  const { data, isLoading } = useViewAccountList()
  const addKeyToData = (dataArray: AccountTableData[] | AccountDetail[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: AccountTableData | AccountDetail) => {
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
        isLoading={isLoading}
      />
    </div>
  )
}
