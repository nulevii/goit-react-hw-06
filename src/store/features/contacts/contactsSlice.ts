import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IContact {
  id: string
  name: string
  number: string
}
const initialState: { contacts: IContact[] } = {
  contacts: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

  }
})

const contactsReducer = contactsSlice.reducer
export default contactsReducer
