import React from 'react'

export const Button = ({children,className,type}) => {
  return (
    <>
      <button className={className} type={type}>{children}</button>
    </>
  )
}


