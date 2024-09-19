import React from 'react'
import { Props } from '../lib/types/TodoTypes'

export default function SearchBar({value, onChange}: Props) {
  return (
    <div className='grow flex'>
      <input type="text" value={value} onChange={onChange} placeholder='Search' className='px-4 grow py-2 outline-none rounded-lg border border-indigo-500 focus:border-2' />
    </div>
  )
}
