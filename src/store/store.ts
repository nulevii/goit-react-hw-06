import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './features/contacts/contactsSlice'
import filterReducer from './features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
