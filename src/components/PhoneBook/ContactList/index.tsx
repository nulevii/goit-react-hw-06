import React from 'react'
import style from '../style.module.css'
import { useAppSelector } from '../../../store/hooks'

import Contact from './Contact'
function ContactList (): JSX.Element {
  const contacts = useAppSelector(state => state.contacts.contacts)
  const filter = useAppSelector(state => state.filter.filter)
  if (contacts.length === 0) return <p>Contacts is empty</p>
  const filterText = filter.trim().replace(/[^a-zA-Z ]/g, '').replace(/\s\s+/g, ' ')
  const filterRegExp = new RegExp(`${filterText}`, 'gi')
  const filteredElements = contacts.filter(({ name }) => name.match(filterRegExp))
  return (
    <ul className={style.contactsList}>
      {filteredElements.map(({ name, number, id }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
        ></Contact>
      ))}
    </ul>
  )
}

export default ContactList
