import React, { useState } from 'react'
import { PrevButton } from '../../atoms'
import { MobileMenuIcon, NavBar } from '../../organisms'
import { HistoryText } from '../../molecules'
import { kingCrestData } from './kingCrestData'
import './index.css'


export const History = () => {

  const [currentIndex, setCurrentIndex] =useState(0)
  const prevClickHandler=()=>{
      const isFirstSlide = currentIndex===0;
      const newIndex= isFirstSlide ? kingCrestData.length-1 : currentIndex - 1;
      setCurrentIndex(newIndex)
  }
  const nextClickHandler=()=>{
      const isLastSlide=currentIndex === kingCrestData.length-1;
      const newIndex= isLastSlide ? 0 : currentIndex +  1;
      setCurrentIndex(newIndex)
      console.log(newIndex)
  }

  return (
    <>
        <NavBar/>
        <PrevButton/>
        <MobileMenuIcon />
        <section className='history-body-section'>
        <div className='king-crest-container'>
        <h2 className='mob-history-text'>History</h2>
          <div>
            <button onClick={prevClickHandler}>🢐</button>
            <div className='king-crest-img-container'><img src={kingCrestData[currentIndex].imgUrl}  alt='imag'/></div>
            <button onClick={nextClickHandler} >🢒</button>
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

 

  