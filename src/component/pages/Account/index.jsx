import React from 'react'
import { PrevButton, Text } from '../../atoms'
import { LoginForm } from '../../molecules'
import './index.css'
import loginbg from '../../../assests/images/loginpagebg.png'

export const Account = () => {
  const leftHalfStyles = {
    backgroundImage: `url(${loginbg})`,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:  'center',
  }
  return (
    <main className='login-main'>
      <PrevButton style={{border:'0px',left:'0'}}/>
      <div style={leftHalfStyles} className='login-page-left-half'></div>
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

 
