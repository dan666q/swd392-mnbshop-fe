import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type UIState = 'add' | 'view' | 'edit'
export type SectionType = 'general' | 'other' | 'class' | 'reserved' | 'scores'

type SectionState = Record<string, UIState>

type PayloadType = {
  page: 'system' | 'class'
  key?: SectionType
  value: UIState
}

type InitialUIState = {
  sections: { system: SectionState; class: SectionState }
  isAllEnabled: boolean
  isEditing: boolean
}

const initialState: InitialUIState = {
  sections: {
    system: {
      general: 'view',
      other: 'view',
      class: 'view',
      reserved: 'view',
      scores: 'view'
    },
    class: {
      general: 'view',
      other: 'view',
      scores: 'view'
    }
  },
  isAllEnabled: false,
  isEditing: false
}

const uiStateSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    replaceMode: (state, action: PayloadAction<PayloadType>) => {
      const { page, value } = action.payload
      if (state.sections[page]) {
        Object.keys(state.sections[page]).forEach((key) => {
          state.sections[page][key] = value
        })
      }
      state.isAllEnabled = true
    },
    setMode: (state, action: PayloadAction<PayloadType>) => {
      const { key, value, page } = action.payload
      if (key) {
        state.sections[page][key] = value
        state.isEditing = value === 'edit'
      }
    }
  }
})

export const { replaceMode, setMode } = uiStateSlice.actions
export default uiStateSlice.reducer
