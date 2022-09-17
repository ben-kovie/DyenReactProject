import React from 'react'

export const Input = ({placeholder,name,id,type,className}) => {
  return (
    <>
      <input className={className} type={type} name={name} id={id} placeholder={placeholder} />
    </>
  )

}
