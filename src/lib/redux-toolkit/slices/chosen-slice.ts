import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ChosenState {
  isChosen: boolean
  productId: string[]
}

const initialState: ChosenState = {
  isChosen: false,
  productId: [],
}

const ChosenSlice = createSlice({
  name: 'studentStatus',
  initialState,
  reducers: {
    setIsChosen: (state, action: PayloadAction<boolean>) => {
      state.isChosen = action.payload
    },
    setProductChosen: (state, action: PayloadAction<string[]>) => {
      state.productId = action.payload
    },
  },
})

export const { setIsChosen, setProductChosen } = ChosenSlice.actions
export default ChosenSlice.reducer
