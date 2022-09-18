import React from 'react'
import { NavBar} from './component'
// import { Account} from './component'
import { RoyalCourtNotices} from './component'
// import { History } from './component'
import TheGinuwa from './component/pages/TheGinuwa/TheGinuwa'
 import LandingPage from './component/pages/LandingPage/LandingPage'
import { Route, Routes} from "react-router-dom"
import { PageTemplate } from './component'
import {History} from './component'





     
function App() {
  return (
  // <PageTemplate header= {}>
   //   <HistoryPage />
   <div>
   <PageTemplate header={<NavBar />}>
     <Routes>
      <Route path ='/' element = {<LandingPage/>}/>
      <Route path ='/royalCourtNotices' element ={<RoyalCourtNotices />}/>
       <Route path ='/history' element = {<History/>}/>
          <Route path ='/theGinuwa' element = {<TheGinuwa/>}/>
         </Routes>
       </PageTemplate>
          </div>

 //    </PageTemplate>

  )
}

export default App

