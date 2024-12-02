import TableData from '@/components/manager-screen/table'
import { VIEW_PROMOTION_COLS } from '@/constants/table-columns'
import { PromotionData, PromotionTableData } from '@/types'
import { useViewPromotionList } from './use-view-promotion-list'

export default function ViewPromotionList() {
  const { data, isLoading } = useViewPromotionList()
  const addKeyToData = (dataArray: PromotionTableData[] | PromotionData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: PromotionTableData | PromotionData) => {
      return {
        ...item,
        key: item?.promotionId,
      }
    })
  }
  const dataWithKeys: PromotionTableData[] = (data && addKeyToData(data)) || []
  return (
    <div>
      <TableData<PromotionTableData>
        columns={VIEW_PROMOTION_COLS}
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
