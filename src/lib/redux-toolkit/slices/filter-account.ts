import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type FilterPayloadType = 'filter'

type PayloadType = {
  key: FilterPayloadType
  value: string[]
}

interface FilterState {
  value: string
  filter: string[]
}

const initialState: FilterState = { value: '', filter: [] }

const filterSliceAccount = createSlice({
  name: 'filterStudentsClass',
  initialState,
  reducers: {
    setFilterAccount: (state, action: PayloadAction<PayloadType>) => {
      const { key, value } = action.payload
      state[key] = value
    },
    setSearchAccount: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setFilterAccount, setSearchAccount } = filterSliceAccount.actions
export default filterSliceAccount.reducer
