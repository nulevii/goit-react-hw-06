import React, { ChangeEvent, useState } from 'react'
import style from '../style.module.css'
import { addContact } from '../../../store/features/contacts/contactsSlice'
import { useAppDispatch } from '../../../store/hooks'

function ContactForm (): JSX.Element {
  const dispatch = useAppDispatch()

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onInputName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const onNumberName = (e: ChangeEvent<HTMLInputElement>): void => {
    setNumber(e.target.value)
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(addContact({ name, number }))
    setName('')
    setNumber('')
  }

  return (
      <form
        onSubmit={onSubmitForm}
        className={style.phoneBookForm}
        action="submit"
      >
        <label>
          <p className={style.inputCaption}>Name</p>
          <input
            onChange={onInputName}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <p className={style.inputCaption}>Number</p>
          <input
            onChange={onNumberName}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={style.cyberButton}>ADD CONTACT</button>
      </form>
  )
}

export default ContactForm
