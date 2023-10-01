import React from 'react'
import './Home.css'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import Btn from '../../Components/Btn/Btn'
import SectionsTitle from '../../Components/sectionsTitle/sectionsTitle'
import HomeRestaurantProperty from '../../Components/HomeRestaurantProperty/HomeRestaurantProperty'
import HomeMenuImagesContainer from '../../Components/HomeMenuImagesContainer/HomeMenuImagesContainer'
import HomeEventUpcoming from '../../Components/HomeEventUpcoming/HomeEventUpcoming'
document.title = 'Home'
export default function Home() {
  const date = new Date()

  return (
    <>
      <HomeCarousel />
      <section className='welcome-section row'>
        <div className="welcome-section-descriptions col-12 col-md-6">
<SectionsTitle subTitle={'Italian Restaurant'} title={'WELCOME'} titleColor={"black"} />
          <p className="welcome-section-desc">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
          </p>
       <Btn title={'OUR STORY'}/>
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
      <HomeRestaurantProperty />
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
      
    </>
  )
}

