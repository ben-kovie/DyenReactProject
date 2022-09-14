import React from 'react'
import { PrevButton } from '../../atoms'
import { HistoryText } from '../../molecules'
import './index.css'

export const HistoryPage = () => {
  return (
    <>
        <PrevButton/>
        <section className='history-body-section'>
        <div className='king-crest-container'>
          <button>4</button>
          <img src='https://atuwatseiii.com/assets/img/crests/iwere_kings/atonrongboye.jpg'  alt='imag'/>
          <button>5</button>
        </div>
        <div className='history-page-right-half'>
          <div><h2>History</h2></div>
          <HistoryText/>
        </div>
        </section>

    </>
  )
}

 
