import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import List from './Pages/List'
import Pages from './Pages/Pages'

function App() {
  return (
<BrowserRouter>
<Pages/>
  <Routes>
      <Route path='/' element={<Home/>}/>
     
      <Route path='/list' element={<List/>}/>


  </Routes>
   
</BrowserRouter>
  )
}

export default App