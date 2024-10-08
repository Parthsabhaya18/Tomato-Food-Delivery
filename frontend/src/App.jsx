import React from 'react'
import Navbar from './component/navbar/Navbar/'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Placeholder from './pages/placeHolder/Placeholder'
import Home1 from './pages/home/Home1'
import Cart from './pages/cart/Cart'
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeholder/>}/>
      </Routes>
    </div>
  )
}
export default App