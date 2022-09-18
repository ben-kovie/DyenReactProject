
import React from 'react'
//import { PrevButton } from '../../atoms'
//import { HistoryText } from '../../molecules'
import Data from "./Data"
import "./TheGinuwa.css"


function TheGinuwa() {
  return (
    <div >
      
  <section className='history-bdy-section'>
       
       <div className=''>
         <h1>first section</h1>
            </div>
     

           <div  className='right-corner'>
           <h2>The Ginuwa Ruling House</h2>
           <p>Warri Kingdom</p>
           <input type= 'text' placeholder='search' className='ipt'></input>

       <div  className='second-section' >
          <div className='scrollable-part'>
           <Data/>
               </div>

                   <div className=''>
                    <h1>third section</h1>
                      </div>
                        </div>
                          </div>
        </section>

    
    </div>
  )
}

export default TheGinuwa
