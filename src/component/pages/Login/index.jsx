import React from 'react'
import { PrevButton, Text } from '../../atoms'
import { LoginForm } from '../../molecules'
import './index.css'

export const Login = () => {
  return (
    <main className='login-main'>
      <PrevButton />
      <div className='login-page-left-half'><img className='login-image' src="https://atuwatseiii.com/static/media/speeches.32008b73e3d952cf67ed.png" alt="img" /></div>
      <div className='login-page-right-half'>
        <div>
          <Text className={'login-h2-txt'} type='h2'>Login</Text>
          <Text className={'login-safe-details-txt'} type='p'>Your details are kept safe and with it you can always gain access!</Text>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}

 
