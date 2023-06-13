import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from '../common/header/Navbar'
import Home from '../home/Home'

const Pages = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Pages