import React from 'react'
import {PrevButton,Text } from '../../atoms'
import { NavBar,MobileMenuIcon, SpeechText } from '../../organisms'
import './index.css'


export const Speeches= () => {
    const prevButtonStyle={
    position:'absolute',
    top: '14px',
    left:'37%',
  }
  
  return (
    <div>
      <section className='speech-page'>
        <NavBar />
        <PrevButton style={prevButtonStyle} />
        <MobileMenuIcon />
      <div className='speech-left-section'><img src="https://atuwatseiii.com/static/media/speeches.32008b73e3d952cf67ed.png" alt="imag" /></div>
      <div>
        <div  className='speech-middle-section'>
            <SpeechText />
        </div>
        <div className="all-speech">
            <div>
              
            </div>
        </div>
      </div>
      <div className='speech-right-section' >
          <div className='speech-right-section-top'>
            <div>
              <div className='d-flex mobile-top-section-div'>
                <span id='mobile-backward-arrow' className='mobile-backward-arrow'>⟵</span>
                <Text type='p' className='speech-right-section-top-h5'></Text>
              </div>
              <span className='speech-right-section-top-span mob-d-none'></span>
            </div>
          </div>
          <div className='speech-right-section-p-container'>
            <div className='speech-right-section-p-div' >
              <div className='speech-right-section-p'>
                  <span className='mobile-speech-date-text'></span>
                  <Text className='speech-right-section-p-text' type='p'></Text>
              </div>
            </div>
          </div>
      </div>
    </section>
    </div>
  )
}

