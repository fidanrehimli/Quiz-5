
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header/Header'
import Home from './pages/Home'
import About from './pages/About'
import Restaurant from './pages/Restaurant'
import Add from './pages/Add'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/restaurant' element={<Restaurant/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </>
  )
}

export default App
