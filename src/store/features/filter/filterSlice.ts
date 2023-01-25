import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFilter {
  filter: string
}
const initialState: IFilter = {
  filter: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<{ filter: string }>) => {
      state.filter = payload.filter
    }
  }
})

const filterReducer = filterSlice.reducer
export default filterReducer
export const { setFilter } = filterSlice.actions
