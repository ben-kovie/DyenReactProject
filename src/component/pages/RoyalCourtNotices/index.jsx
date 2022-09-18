import React from 'react'
import { Input, PrevButton,Text } from '../../atoms'
import { MobileMenuIcon,NavBar } from '../../organisms'
import './index.css'

export const RoyalCourtNotices = () => {
  const prevButtonStyle={
    position:'absolute',
    top: '14px',
    left:'37%',
  }
  const searchInputStyle={
    borderColor: 'black', 
    width:'100%'
  }
  return (
    <section className='notice-page'>
      <NavBar/>
      <PrevButton style={prevButtonStyle} />
      <MobileMenuIcon />
      <div className='notice-left-section'><img src="https://atuwatseiii.com/static/media/speeches.32008b73e3d952cf67ed.png" alt="imag" /></div>
      <div>
        <div  className='notice-middle-section'>
          <div className='notice-middle-section-top' >
            <Text type='h2'>Royal Court Notices</Text>
            <Text type='p'>The is the official record of past royal engagements.</Text>
            <Input style={searchInputStyle} placeholder='search' id='search' type='search' name='search' />
          </div>
        </div>
        <div className="all-notices">
            <div>
              <Text type='p'>no notice from the royal court yet</Text>
            </div>
        </div>
      </div>
      <div className='notice-right-section-top'>

      </div>
    </section>
  )
}


