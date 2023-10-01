import React from 'react'
import './HomeMenuImagesContainer.css'
import { Link } from 'react-router-dom'
export default function HomeMenuImagesContainer({ imgSrc,btnTitle }) {
       return (
              <section className='h-100 w-100'>
                     <section className='HomeMenuImagesWrapper position-relative'>
                            <img src={imgSrc} className='img-fluid home-menu-img' alt="menu" />
                            <section className='home-menu-item-btn-container'>
                                   <Link className='btn home-menu-item-btn'>{btnTitle}</Link>
                            </section>
                     </section>
              </section>
       )
}
