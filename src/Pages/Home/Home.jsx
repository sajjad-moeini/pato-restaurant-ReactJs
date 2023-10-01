import React from 'react'
import './Home.css'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import Btn from '../../Components/Btn/Btn'
import SectionsTitle from '../../Components/sectionsTitle/sectionsTitle'
import HomeRestaurantPropertyOrBlogs from '../../Components/HomeRestaurantProperty/HomeRestaurantPropertyOrBlogs'
import HomeMenuImagesContainer from '../../Components/HomeMenuImagesContainer/HomeMenuImagesContainer'
import HomeEventUpcoming from '../../Components/HomeEventUpcoming/HomeEventUpcoming'
import { Link } from 'react-router-dom'
import HomeReservationInputs from '../../Components/HomeReservationInputs/HomeReservationInputs'
import HomeCustomeSayCarousel from '../../Components/HomeCustomeSayCarousel/HomeCustomeSayCarousel'
import { AiFillPlayCircle } from 'react-icons/ai'
document.title = 'Home'
export default function Home() {

  return (
    <>
      <HomeCarousel />
      <section className='welcome-section row'>
        <div className="welcome-section-descriptions col-12 col-md-6">
          <SectionsTitle subTitle={'Italian Restaurant'} title={'WELCOME'} titleColor={"black"} />
          <p className="welcome-section-desc">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
          </p>
          <Btn title={'OUR STORY'} />
        </div>
        <div className="welcome-img-container col-12 col-md-6">
          <div className='welcome-img-wrapper'>
            <img src="img/our-story-01.jpg.webp" className='img-fluid welcome-img' alt="welcome-img" />
          </div>
        </div>
      </section>
      <section className="discover-section">
        <SectionsTitle subTitle={'Discover'} title={'PATO PLACE'} titleColor={"#f3f0f0"} />

      </section>
      <HomeRestaurantPropertyOrBlogs type={'property'} badge={false} btnTitle={'LEARN MORE'} />
      <section className='menu-demo'>
        <SectionsTitle subTitle={'Discover'} title={'OUR MENU'} titleColor={'#444'} />
        <div className="row menu-all-images-container mt-5">
          <div className="col-12 col-md-4 mt-3">
            <HomeMenuImagesContainer btnTitle={'LUNCH'} imgSrc={'img/our-menu-01.jpg.webp'} />
          </div>
          <div className="col-12 col-md-4 mt-3">
            <HomeMenuImagesContainer btnTitle={'DINNER'} imgSrc={'img/our-menu-05.jpg.webp'} />
          </div>
          <div className="col-12 col-md-4 mt-3">
            <div className="h-50">
              <HomeMenuImagesContainer btnTitle={'DRINK'} imgSrc={'img/our-menu-08.jpg.webp'} />
            </div>
            <div className="h-50 mt-3">
              <HomeMenuImagesContainer btnTitle={'STARTERS'} imgSrc={'img/our-menu-10.jpg.webp'} />
            </div>
          </div>
        </div>
        <div className="row menu-all-images-container mt-3">
          <div className="col-12 col-md-8">
            <HomeMenuImagesContainer btnTitle={'HAPPY HOUR'} imgSrc={'img/our-menu-13.jpg.webp'} />
          </div>
          <div className="col-12 col-md-4">
            <HomeMenuImagesContainer btnTitle={'DESSERT'} imgSrc={'img/our-menu-16.jpg.webp'} />
          </div>
        </div>
      </section>
      <HomeEventUpcoming />
      <div className="home-reservtion-section">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <SectionsTitle title={'BOOK TABLE'} subTitle={'Reservation'} titleColor={'black'} />
              <div className="row px-5 pt-3">
                <HomeReservationInputs />
              </div>
              <Link to={'/reservtion'} className='btn home-reservtion-btn'>BOOK TABLE</Link>
            </div>

          </div>
          <div className="col-12 col-lg-6">
            <div className="home-reservtion-img-container mt-5 mx-auto">
              <img src="img/booking-01.jpg.webp" className='img-fluid home-reservtion-img' alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className="d-flex flex-column justify-content-center align-items-center py-5 mt-3">
        <SectionsTitle title={'REVIEW'} titleColor={'black'} subTitle={'Customers Say'} />
        <HomeCustomeSayCarousel />
      </div>
      <div className="home-our-video-section">
        <div className="home-our-video-wrapper h-100 w-100  d-flex flex-column justify-content-center align-items-center">
          <SectionsTitle title={'OUR VIDEO'} subTitle={'Discover'} titleColor={'#fff'} />
          <div className='play-icon-container'>
          <AiFillPlayCircle />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <SectionsTitle title={'THE BLOG'} titleColor={'black'} subTitle={'Latest News'}/>
      </div>
      <HomeRestaurantPropertyOrBlogs type={'blogs'} badge={true} btnTitle={'CONTINUE READING'} />
    </>
  )
}

