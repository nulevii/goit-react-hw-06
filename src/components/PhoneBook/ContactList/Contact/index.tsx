import React from 'react'
import style from '../../style.module.css'
import { deleteContact } from '../../../../store/features/contacts/contactsSlice'
import { useAppDispatch } from '../../../../store/hooks'
function Contact (props: {
  name: string
  number: string
  id: string
}): JSX.Element {
  const dispatch = useAppDispatch()

  const onDeleteContact = (id: string): () => void => {
    return () => {
      dispatch(deleteContact({ elementId: id }))
    }
  }
  return (
    <li>
      <span className={style.contactName}> {props.name}</span>
      <span className={style.contactNumber}>{props.number}</span>
      <button
        onClick={ onDeleteContact(props.id) }
        className={`${style.cyberButton} ${style.small}`}
      >
        DELETE
      </button>
    </li>
  )
}

export default Contact
