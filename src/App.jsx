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
      <div className="test">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam blanditiis dolor ipsum mollitia obcaecati, corporis ut delectus aut sequi, nobis iste modi voluptatum ex vitae ipsa provident? Nulla adipisci quos repellendus et magni optio necessitatibus! Totam, nobis modi harum dignissimos doloremque, porro, natus quis incidunt facilis ea fuga dicta. Molestias blanditiis at accusamus alias. Explicabo, officiis nobis placeat nihil aliquid assumenda debitis? Iusto neque alias reiciendis doloremque minus aut eveniet ipsa reprehenderit. Deserunt in repellendus deleniti, natus praesentium quidem doloribus eaque. Libero earum eos, doloribus obcaecati, saepe aperiam sequi amet adipisci qui ab architecto porro sapiente quidem. Incidunt, aspernatur.
      </div>
    </>
  )
}

export default App
