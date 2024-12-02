import CustomerFooter from '@/components/customer-screen/customer-footer'
import CustomerHeader from '@/components/customer-screen/customer-header'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CustomerHeader />
      {children}
      <CustomerFooter />
    </div>
  )
}
