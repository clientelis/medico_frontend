import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'
import InteractionChecker from './components/DrugInteraction/InteractionChecker'
const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/interaction-checker' element={<InteractionChecker/>}/>
        </Routes>

      </main>
      <Footer></Footer>
    </Router>


  )
}

export default App
