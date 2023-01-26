import React from 'react'

import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'
import style from './style.module.css'

function PhoneBook (): JSX.Element {
  return (
      <section className={style.phoneBookSection}>
        <h1 className={style.title}> Phonebook </h1>
        <ContactForm />
        <div className={style.contacts}>
          <h2 className={style.contactsCaption}>CONTACTS</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
  )
}

export default PhoneBook
