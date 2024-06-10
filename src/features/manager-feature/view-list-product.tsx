import TableData from '@/components/manager-screen/table'
import { VIEW_PRODUCT_COLS } from '@/constants/table-columns'
import { ProductTableData } from '@/types'
import data from '@/mock/products-list.json'

export default function ViewListProduct() {
  const addKeyToData = (dataArray: ProductTableData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: ProductTableData) => {
      return {
        ...item,
        key: item.productId,
      }
    })
  }

  console.log(data.length)

  const dataWithKeys: ProductTableData[] = (data && addKeyToData(data)) || []

  return (
    <div>
      <TableData<ProductTableData>
        columns={VIEW_PRODUCT_COLS}
        data={dataWithKeys}
        total={data?.length}
        scrollX={1500}
        scrollY={450}
        hasRowSelection
      />
    </div>
  )
}
