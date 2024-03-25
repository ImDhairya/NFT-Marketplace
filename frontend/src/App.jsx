import { useState } from 'react'
 
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSeller from './pages/BestSellers/BestSeller'
import Products from './pages/Products/Products'

function App() {
 

  return (
    <>
       <Navbar/>
       <Hero/>
       <BestSeller/>
       <Products/>
    </>
  )
}

export default App
