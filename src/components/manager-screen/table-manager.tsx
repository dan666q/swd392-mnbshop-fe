import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'

// Define the interface for the account data structure
interface Account {
  id: number
  username: string
  fullName: string
  dob: string
  gender: string
  email: string
  address: string
  phone: string
  isDisabled: boolean
  image: string
  role: string
}

// Sample data
const sampleAccounts: Account[] = [
  {
    id: 1,
    username: 'johndoe',
    fullName: 'John Doe',
    dob: '1990-01-01',
    gender: 'Male',
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown, USA',
    phone: '555-555-5555',
    isDisabled: false,
    image: 'path/to/image.jpg',
    role: 'User',
  },
  {
    id: 2,
    username: 'janedoe',
    fullName: 'Jane Doe',
    dob: '1992-02-02',
    gender: 'Female',
    email: 'janedoe@example.com',
    address: '456 Elm St, Anytown, USA',
    phone: '555-555-5556',
    isDisabled: true,
    image: 'path/to/image.jpg',
    role: 'Admin',
  },
]

export default function TableManager() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="account table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'black' }}>
              <TableCell sx={{ color: 'white' }}>Username</TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                FullName
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                Email
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                Gender
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                DoB
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                Address
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                Phone
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                Role
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="left">
                Status
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleAccounts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              sampleAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>{account.username}</TableCell>
                  <TableCell align="left">{account.fullName}</TableCell>
                  <TableCell align="left">{account.email}</TableCell>
                  <TableCell align="left">{account.gender}</TableCell>
                  <TableCell align="left">{account.dob}</TableCell>
                  <TableCell align="left">{account.address}</TableCell>
                  <TableCell align="left">{account.phone}</TableCell>
                  <TableCell align="left">{account.role}</TableCell>
                  <TableCell align="left">{account.isDisabled ? 'Disabled' : 'Active'}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: 'black',
                        '&:hover': {
                          backgroundColor: 'black',
                        },
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
