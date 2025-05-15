import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/navbar/navbar'
import Footer from './components/footer/footer'
import AppRoute from './components/Routes/route'

function App() {

  return (
    <>
   <BrowserRouter>
   <Header/>
  <AppRoute/>
   <Footer/>
   </BrowserRouter>

    </>
  )
}

export default App
