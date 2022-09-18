import React from 'react'
<<<<<<< HEAD
import { NavBar} from './component'
// import { Account} from './component'
import { RoyalCourtNotices} from './component'
// import { History } from './component'
// import TheGinuwa from './component/pages/TheGinuwa/TheGinuwa'
// import LandingPage from './component/pages/LandingPage/LandingPage'

import { PageTemplate } from './component'

function App() {
  return (<>
     <PageTemplate header={<NavBar />}>
      {/* <History /> */}
      {/* <Account /> */}
      <RoyalCourtNotices />
      {/* <TheGinuwa/> */}
      {/* <LandingPage/> */}
     </PageTemplate>
    </>
=======
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
>>>>>>> main
  )
}

export default App

