import React from 'react'
import Home from './Home'
import Wrap from './Wrap'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function Pages() {
  return (
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wrap" element={<Wrap />} />
        </Routes>
    

  )
}
export default Pages