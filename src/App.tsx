// App.tsx
import React, { useState } from 'react'
import { CssBaseline, Box, Container } from '@mui/material'
import NavbarManager from './components/manager-screen/navbar-manager'
import Sidebar from './components/manager-screen/sidebar-manager'
import AccountList from './pages/manager-pages/account-list'
import Footer from './components/manager-screen/footer-manager'

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <NavbarManager onToggleSidebar={handleToggleSidebar} />
      <Box sx={{ display: 'flex', flexGrow: 1, mt: 8 }}>
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        <Container sx={{ flexGrow: 1, p: 3 }}>
          <div style={{ marginTop: '50px' }}>
            <AccountList />
          </div>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
