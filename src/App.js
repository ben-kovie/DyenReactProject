import React from 'react'
import { Route, Routes} from "react-router-dom"
import {HistoryPage} from './component'
//import { PageTemplate } from './component'
import LandingPage from './component/pages/LandingPage/LandingPage'
import TheGinuwa from './component/pages/TheGinuwa/TheGinuwa'

function App() {
  return (
  // <PageTemplate header= {}>
   //   <HistoryPage />
   <div>
   
     <Routes>
      <Route path ='/' element = {<LandingPage/>}/>
       <Route path ='/historPage' element = {<HistoryPage/>}/>
          <Route path ='/theGinuwa' element = {<TheGinuwa/>}/>
         </Routes>
       
          </div>

 //    </PageTemplate>
  )
}

export default App

