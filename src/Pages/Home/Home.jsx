import React from 'react'
import './Home.css'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
document.title = 'Home'
export default function Home() {

  return (
    <>
      <HomeCarousel />
      <section className='welcome-section row'>
        <div className="welcome-section-descriptions col-12 col-md-6">
          <div className="h2 welcome-section-subtitle">
            Italian Restaurant
          </div>
          <div className="h1 welcome-section-title">
            WELCOME
          </div>
          <p className="welcome-section-desc">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
          </p>
          <Link className='welcome-section-btn btn'>
            OUR STORY <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="welcome-img-container col-12 col-md-6">
          <div className='welcome-img-wrapper'>
            <img src="img/our-story-01.jpg.webp" className='img-fluid welcome-img' alt="welcome-img" />
          </div>
        </div>
      </section>
      <section className="discover-section">
        <div className="h3 discover-section-subtitle">Discover</div>
        <div className="h1 discover-section-title">PATO PLACE</div>
      </section>
    </>
  )
}
