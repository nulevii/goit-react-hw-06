import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

interface IContact {
  id: string
  name: string
  number: string
}
const initialState: { contacts: IContact[] } = {
  contacts: JSON.parse(localStorage.getItem('contacts') as string) ?? [{ id: 'id-1', name: 'Johnny Silverhand', number: '459-20-77' }]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<{ name: string, number: string }>) => {
      if (state.contacts.some((contact) => contact.name === payload.name)) {
        alert(`${payload.name} is already in contacts.`)
        return
      }
      const id = nanoid()
      const contact: IContact = { ...payload, id }
      state.contacts.push(contact)
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    deleteContact: (state, { payload }: PayloadAction<{ elementId: string }>) => {
      console.log('first')
      const contactId = state.contacts.findIndex(
        ({ id }) => id === payload.elementId
      )
      state.contacts.splice(contactId, 1)
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }

  }
})

const contactsReducer = contactsSlice.reducer
export default contactsReducer
export const { addContact, deleteContact } = contactsSlice.actions
