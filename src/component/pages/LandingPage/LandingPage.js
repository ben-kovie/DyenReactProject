import React, { useState } from 'react'
import {Link} from "react-router-dom"
//import { PrevButton, MobileMenuIcon } from '../../atoms'
import { BsFillGrid1X2Fill, BsBackspaceFill } from "react-icons/bs";
import "./LandingPage.css"

function LandingPage() {

  const [click, clicked ] = useState(false)

  const clickEvent = () => clicked(!click)

  



  return (
    <div className='conatainer bcg'>
  
        <div className='nav-bar container'>
        <div className='logo'><img src = 'https://atuwatseiii.com/#/' /></div>
       
        <ul className='list ms-auto'>
        <li><Link to='/historyPage'>History
        <hr className='underliner'/>
        </Link></li>
        <li><Link to ='/theGinuwa'>The Ginuwa Ruling House<hr className='underliner'/></Link></li>
        <li><Link to ='/'>Warri Traditional Council<hr className='underliner'/></Link></li>
        <li><Link to='/'> Royal Court Notices<hr className='underliner'/></Link></li>
        </ul>
          </div>

        <div className='menu-icon' onClick={clickEvent}>
        {click ? (<BsBackspaceFill />) : ( < BsFillGrid1X2Fill/>)}
          
        
        </div>
    
    </div>
  )
}

export default LandingPage
