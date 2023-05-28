import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface I<FTName | capitalize> {
  /** Describe */
}

/** Initial state for [FTName] feature */
const initialState: I<FTName | capitalize> = {}

export const [FTName]Slice = createSlice({
  name: '[FTName]',
  initialState,
  reducers: {
    reducer1(state, action: PayloadAction<any>) {},
  },
})

// Action creators are generated for each case reducer function
export const {  } = [FTName]Slice.actions

export default [FTName]Slice.reducer