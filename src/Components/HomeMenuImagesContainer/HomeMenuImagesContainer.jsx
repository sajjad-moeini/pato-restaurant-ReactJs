import React from 'react'
import './HomeMenuImagesContainer.css'
import { Link } from 'react-router-dom'
export default function HomeMenuImagesContainer({ imgSrc,btnTitle }) {
       return (
              <div className='h-100 w-100'>
                     <div className='HomeMenuImagesWrapper position-relative'>
                            <img src={imgSrc} className='img-fluid home-menu-img' alt="menu" />
                            <div className='home-menu-item-btn-container'>
                                   <Link className='btn home-menu-item-btn'>{btnTitle}</Link>
                            </div>
                     </div>
              </div>
       )
}
