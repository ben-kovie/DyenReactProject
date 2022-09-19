import React from 'react'
import { NavBar,History,Account,RoyalCourtNotices,PageTemplate,Speeches} from './component'
import TheGinuwa from './component/pages/TheGinuwa/TheGinuwa'
import LandingPage from './component/pages/LandingPage/LandingPage'
import { Route, Routes} from "react-router-dom"


function App() {
  return (
  
   <div>
   <PageTemplate header={<NavBar />}>
     <Routes>
        <Route path ='/' element = {<LandingPage/>}/>
        <Route path ='/royalCourtNotices' element ={<RoyalCourtNotices />}/>
        <Route path ='/history' element = {<History/>}/>
        <Route path ='/theGinuwa' element = {<TheGinuwa/>}/>
        <Route path ='/account' element = {<Account/>}/>
        <Route path ='/speeches' element = {<Speeches/>}/>
      </Routes>
    </PageTemplate>
          </div>


  )
}

export default App

