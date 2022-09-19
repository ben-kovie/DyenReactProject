import React from 'react'
import { Input } from '../../atoms'

export const SearchInput = (id,style) => {
  return (
    <div>
      <Input placeholder='search' name='search' id={id} type='search' style={style}/>
    </div>
  )
}


