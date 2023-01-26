import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactsReducer from './features/contacts/contactsSlice'
import filterReducer from './features/filter/filterSlice'

const persistConfig = {
  key: 'root',
  storage
}

const contactsPersistReducer = persistReducer(persistConfig, contactsReducer)
export const store = configureStore({
  reducer: {
    contacts: contactsPersistReducer,
    filter: filterReducer
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
