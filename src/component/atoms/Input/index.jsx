import React from 'react'
import './index.css'

export const Input = ({placeholder,name,id,type,style}) => {
  return (
    <>
      <input style={style} className='input' type={type} name={name} id={id} placeholder={placeholder} />
    </>
  )

}
