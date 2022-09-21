import React from 'react'
import {PrevButton } from '../../atoms'
import { MobileMenuIcon, SpeechText } from '../../organisms'
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
          <div className='speech-right-section-top'></div>
      </div>
    </section>
    </div>
  )
}

