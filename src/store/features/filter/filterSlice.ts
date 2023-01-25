import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  filter: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {}
})

const filterReducer = filterSlice.reducer
export default filterReducer
