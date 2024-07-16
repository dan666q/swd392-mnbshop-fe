import SectionHeader from '@/components/manager-screen/section-header'
import ViewListOrder from '@/features/manager-feature/order-mng/view-list-order'
import SearchBar from '@/components/manager-screen/search'

export default function OrderManager() {
  return (
    <>
      <SectionHeader title="Order List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
        </div>
        <ViewListOrder />
      </div>
    </>
  )
}
