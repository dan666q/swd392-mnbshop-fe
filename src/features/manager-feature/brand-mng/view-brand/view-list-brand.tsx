import TableData from '@/components/manager-screen/table'
import { VIEW_BRAND_COLS } from '@/constants/table-columns'
import { BrandListApiResponse, BrandTableData } from '@/types'
import { useViewBrandList } from './use-view-brand-list'

export default function ViewListBrand() {
  const { data, isLoading } = useViewBrandList()
  const addKeyToData = (dataArray: BrandTableData[] | BrandListApiResponse[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: BrandTableData | BrandListApiResponse) => {
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
        isLoading={isLoading}
      />
    </div>
  )
}
