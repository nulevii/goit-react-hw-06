import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

interface IContact {
  id: string
  name: string
  number: string
}
const initialState: { contacts: IContact[] } = {
  contacts: [{ id: 'id-1', name: 'Johnny Silverhand', number: '459-20-77' }]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<{ name: string, number: string }>) => {
      const id = nanoid()
      const contact: IContact = { ...payload, id }
      state.contacts.push(contact)
    },
    deleteContact: (state, { payload }: PayloadAction<{ elementId: string }>) => {
      console.log('first')
      const contactId = state.contacts.findIndex(
        ({ id }) => id === payload.elementId
      )
      state.contacts.splice(contactId, 1)
    }

  }
})

const contactsReducer = contactsSlice.reducer
export default contactsReducer
export const { addContact, deleteContact } = contactsSlice.actions
