import CustomerInforEdit from '@/components/customer-screen/profile/customer-infor-edit'
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info'
import { useAuth } from '@/hooks/use-auth'

export default function CustomerEditProfile() {
  const { user, loadingInitial } = useAuth()

  if (loadingInitial) return <p>Loading...</p>
  return (
    <div>
      <main className="profile">
        <div className="container">
          <div className="profile-container">
            <div className="row gy-md-3">
              {/* Sidebar */}
              <SidebarInfo />
              <CustomerInforEdit />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
