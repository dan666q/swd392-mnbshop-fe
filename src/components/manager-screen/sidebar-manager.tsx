// components/Sidebar.tsx
import React from 'react'
import { Drawer, List, ListItem, ListItemText } from '@mui/material'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          top: '64px', // Adjust top position to be below the navbar
          zIndex: (theme) => theme.zIndex.drawer - 1, // Ensure z-index is below the navbar
        },
      }}
    >
      <List>
        {['Accounts Manager', 'Products Manager', 'Blogs Manager', 'Dashboards'].map((text) => (
          <ListItem button key={text} onClick={onClose}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
