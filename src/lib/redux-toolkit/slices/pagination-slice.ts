import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PaginationType {
  pageSize: number
  pageNumber: number
}

const initialState: PaginationType = { pageSize: 20, pageNumber: 1 }

const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<PaginationType>) => {
      state.pageSize = action.payload.pageSize
      state.pageNumber = action.payload.pageNumber
    },
  },
})

export const { setPagination } = PaginationSlice.actions
export default PaginationSlice.reducer
