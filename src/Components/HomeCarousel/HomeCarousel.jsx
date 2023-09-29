import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'
import { Link, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeCarousel() {
       useEffect(()=>{
              AOS.init();
       },[])
       return (
              <>
                     <Carousel id='home-first-carousel'>
                            <Carousel.Item className='home-carousel-item'>
                                   <img src="img/slide1-01.jpg.webp" className='home-first-carousel-img' alt="slider1" />
                                   <div className='home-carousel-item-inner-box'>
                                          <div className='h2 home-carousel-item-subtitle'>Welcome to</div>
                                          <div className='h1 home-carousel-item-title'>Pato Place</div>
                                          <Link className='btn home-carousel-item-btn'>LOOK MENU</Link>
                                   </div>
                            </Carousel.Item>
                            <Carousel.Item className='home-carousel-item'>
                                   <img src="img/master-slides-02.jpg.webp" className='home-first-carousel-img' alt="slider2" />
                                   <div className='home-carousel-item-inner-box'>
                                          <div className='h2 home-carousel-item-subtitle'>Welcome to</div>
                                          <div className='h1 home-carousel-item-title'>Pato Place</div>
                                          <Link className='btn home-carousel-item-btn'>LOOK MENU</Link>
                                   </div>
                            </Carousel.Item>
                            <Carousel.Item className='home-carousel-item'>
                                   <img src="img/master-slides-02.jpg.webp" className='home-first-carousel-img' alt="slider3" />
                                   <div className='home-carousel-item-inner-box'>
                                          <div className='h2 home-carousel-item-subtitle'>Welcome to</div>
                                          <div className='h1 home-carousel-item-title'>Pato Place</div>
                                          <Link className='btn home-carousel-item-btn'>LOOK MENU</Link>
                                   </div>
                            </Carousel.Item>
                     </Carousel>
              </>
       )
}
