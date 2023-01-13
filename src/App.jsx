import React from 'react'
import "./App.css"
import {Navbar, Header, Register} from "./components/index"
import {About, Contact, Home, Logout, Write} from "./pages/index"
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Write' element={<Write/>} />
        <Route path='/Logout' element={<Logout/>} />
      </Routes>
    </Router>
  )
}

export default App