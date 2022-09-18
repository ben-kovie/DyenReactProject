import React from 'react'
import { Text,Input,Button } from '../../atoms'
import './index.css'

export const LoginForm = () => {
  return (
    <div>
      <form className='login-form' action="">
            <Input placeholder='email'name='email'id='email'type='email'className='login-email'/>
            <Input placeholder='password'name='password'id='password'type='password'className='login-password' />
            <Button type='sumbit' className='login-btn'>Login</Button>
            <Text type={'p'}>Not Registered?Sign Up</Text>
            <span>Continue Browsing...</span>
        </form>
          <Button className='login-change-PW'>Change password</Button>

    </div>
  )
}


