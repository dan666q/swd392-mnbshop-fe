// components/Footer.tsx
import React from 'react'
import { Box } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        backgroundColor: 'black', // Change background color to black
        borderTop: '1px solid #e0e0e0',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        zIndex: 1300, // ensure footer is above other elements
      }}
    ></Box>
  )
}

export default Footer
