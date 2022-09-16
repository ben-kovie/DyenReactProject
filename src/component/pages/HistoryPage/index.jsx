import React from 'react'
import { PrevButton } from '../../atoms'
import { MobileMenuIcon } from '../../organisms'
import { HistoryText } from '../../molecules'
// import { kingCrestData } from './kingCrestData'
import './index.css'


export const HistoryPage = () => {
  
  return (
    <>
        <PrevButton/>
        <MobileMenuIcon />
        <section className='history-body-section'>
        <div className='king-crest-container'>
        <h2 className='mob-history-text'>History</h2>
          <div>
            <button>🢐</button>
            <div className='king-crest-img-container'><img src='https://atuwatseiii.com/assets/img/crests/iwere_kings/atonrongboye.jpg'  alt='imag'/></div>
            <button>🢒</button>
          </div>
        </div>
        <div className='history-page-right-half'>
          <div className='desk-history-text'><h2>History</h2></div>
          <HistoryText/>
        </div>
        </section>

    </>
  )
}

 

  