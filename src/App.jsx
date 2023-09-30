import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/Navbar/Navbar'
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { useState } from 'react'


function App() {
const router = useRoutes(routes)

  return (
    <>
      <Navbarr />
      <div className='main-container'>

      {router}
      </div>
    </>
  )
}

export default App
