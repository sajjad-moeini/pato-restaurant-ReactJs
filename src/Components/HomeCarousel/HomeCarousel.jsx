import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'
import { Link, NavLink } from 'react-router-dom';
import store from '../../store';

export default function HomeCarousel() {
const imgSrc = store.HomeCarouselImgSrc
       return (
              <>
                     <Carousel id='home-first-carousel'>
                            {
                                   imgSrc.map((img,index)=>(
                                          <Carousel.Item key={index} className='home-carousel-item'>
                                          <img src={img} className='home-first-carousel-img' alt={`slider${index}`} />
                                          <div className='home-carousel-item-inner-box'>
                                                 <div className='h2 home-carousel-item-subtitle'>Welcome to</div>
                                                 <div className='h1 home-carousel-item-title'>Pato Place</div>
                                                 <Link className='btn home-carousel-item-btn'>LOOK MENU</Link>
                                          </div>
                                   </Carousel.Item>
                                   ))
                            }
                     </Carousel>
              </>
       )
}
