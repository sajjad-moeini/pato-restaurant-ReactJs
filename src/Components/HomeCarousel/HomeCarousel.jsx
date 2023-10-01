import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'
import { Link, NavLink } from 'react-router-dom';
import store from '../../store';

export default function HomeCarousel() {
       const [imgSrc,setImgSrc] = useState([])
       useEffect(()=>{
              setImgSrc([...store.HomeCarouselImgSrc])
       },[])
       return (
              <>
                     <Carousel id='home-first-carousel'>
                            {
                                   imgSrc.map((img,index)=>(
                                          <Carousel.Item key={index} className='home-carousel-item'>
                                          <img src={img} className='home-first-carousel-img' alt={`slider${index}`} />
                                          <section className='home-carousel-item-inner-box'>
                                                 <section className='h2 home-carousel-item-subtitle'>Welcome to</section>
                                                 <section className='h1 home-carousel-item-title'>Pato Place</section>
                                                 <Link className='btn home-carousel-item-btn'>LOOK MENU</Link>
                                          </section>
                                   </Carousel.Item>
                                   ))
                            }
                     </Carousel>
              </>
       )
}
