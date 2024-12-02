import CustomerFooter from '@/components/customer-screen/customer-footer'
import CustomerHeader from '@/components/customer-screen/customer-header'
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info'

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CustomerHeader isLoginPage={true} />
      <SidebarInfo />
      {children}
      <CustomerFooter />
    </div>
  )
}
