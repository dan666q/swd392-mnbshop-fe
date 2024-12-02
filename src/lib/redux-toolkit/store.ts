import chosenSlice from './slices/chosen-slice'
import paginationSlice from './slices/pagination-slice'
import popupSlice from './slices/popup-slice'
import uiStateSlice from './slices/ui-status'
import filterSliceAccount from './slices/filter-account'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    popup: popupSlice,
    ui: uiStateSlice,
    pagination: paginationSlice,
    chosen: chosenSlice,
    filterAccount: filterSliceAccount,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
