import TableData from '@/components/manager-screen/table'
import data from '@/mock/brand.json'
import { VIEW_BRAND_COLS } from '@/constants/table-columns'
import { BrandTableData } from '@/types'

export default function ViewListBrand() {
  const addKeyToData = (dataArray: BrandTableData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: BrandTableData) => {
      return {
        ...item,
        key: item.brandId,
      }
    })
  }
  const dataWithKeys: BrandTableData[] = (data && addKeyToData(data)) || []

  return (
    <div>
      <TableData<BrandTableData>
        columns={VIEW_BRAND_COLS}
        data={dataWithKeys}
        total={data?.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
      />
    </div>
  )
}
