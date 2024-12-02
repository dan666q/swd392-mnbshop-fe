// CustomerProfile.tsx

import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import CustomerInfo from '@/components/customer-screen/profile/customer-info'
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile'
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info'

const CustomerProfile: React.FC = () => {
  return (
    <div>
      <main className="profile">
        <div className="container">
          <SearchBarMobile />
          <div className="profile-container">
            <div className="row gy-md-3">
              {/* Sidebar */}
              <SidebarInfo />
              {/* Info section */}
              <CustomerInfo />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CustomerProfile
