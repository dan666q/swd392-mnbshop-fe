import OrderDetailTable from '@/components/customer-screen/profile/order-detail-table'
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info'

export default function CustomerOdersDetail() {
  return (
    <div>
      <main className="profile">
        <div className="container">
          <div className="profile-container">
            <div className="row gy-md-3">
              {/* Sidebar */}
              <SidebarInfo />
              <OrderDetailTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
