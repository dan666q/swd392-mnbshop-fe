import OrderTable from '@/components/customer-screen/profile/order-table'
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info'

export default function CustomerOders() {
  return (
    <div>
      <main className="profile">
        <div className="container">
          <div className="profile-container">
            <div className="row gy-md-3">
              {/* Sidebar */}
              <SidebarInfo />
              <OrderTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
