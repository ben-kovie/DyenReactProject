import React from 'react'
import { Text,PrevButton } from '../../atoms'
import { MobileMenuIcon,SearchInput } from '../../organisms'

export const Speeches= () => {
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
    <div>
      <section className='notice-page'>
        <PrevButton style={prevButtonStyle} />
        <MobileMenuIcon />
      <div className='notice-left-section'><img src="https://atuwatseiii.com/static/media/speeches.32008b73e3d952cf67ed.png" alt="imag" /></div>
      <div>
        <div  className='notice-middle-section'>
          <div className='notice-middle-section-top' >
            <Text type='h2'>Speeches</Text>
            <SearchInput style={searchInputStyle} id='speeches-search'/>
          </div>
        </div>
        <div className="all-notices">
            <div>
              <Text type='p'>no speeches yet</Text>
            </div>
        </div>
      </div>
      <div className='notice-right-section-top'>

      </div>
    </section>
    </div>
  )
}

