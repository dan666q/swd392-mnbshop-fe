// components/NavbarManager.tsx
import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface NavbarManagerProps {
  onToggleSidebar: () => void
}

const NavbarManager: React.FC<NavbarManagerProps> = ({ onToggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'black' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onToggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          M&B Management
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Warrior Tran
          </Typography>
          <Button color="inherit">Log out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarManager
