import React from 'react'
import Navbar from './components/Navbar/Navbar'
import RoleSection from './components/RoleSection/RoleSection'
import './App.css'
const App = () => {
  return (
    <>
    <div className='container'>
      <Navbar/>
    </div>
    <div className="content">
      <RoleSection/>
    </div>
    </>
    
  )
}

export default App
