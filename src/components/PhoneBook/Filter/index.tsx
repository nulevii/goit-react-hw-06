import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { setFilter } from '../../../store/features/filter/filterSlice'

import style from '../style.module.css'

function Filter (): JSX.Element {
  const dispatch = useAppDispatch()
  const onFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilter({ filter: e.target.value }))
  }
  return (
    <input
      onChange={onFilterChange}
      className={style.textInput}
      type="text"
    />
  )
}

export default Filter
