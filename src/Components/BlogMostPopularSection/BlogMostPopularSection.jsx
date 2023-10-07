import React, { useEffect, useState } from 'react'
import './BlogMostPopularSection.css'
import store from '../../store'
import { Link } from 'react-router-dom'
export default function BlogMostPopularSection() {
       const [popularPlace, setPopularPlace] = useState([])
       useEffect(() => {
              setPopularPlace([...store.blog.popularPlace])
       }, [])
       return (
              <>
                     {popularPlace ? popularPlace.map((place, index) => (
                            <div className='blog-most-popular-box mt-3 row' key={index}>
                                   <div className='col-3 d-flex justify-content-end'>
                                          <img src={place.img} className='blog-most-popular-box-img' alt="z" />
                                   </div>
                                   <div className='blog-most-popular-box -infos d-flex-centring align-items-start flex-column  col-9'>
                                          <Link className="h6 blog-most-popular-box-title">
                                                {place.title}
                                          </Link>
                                          <span className='blog-most-popular-box-date'>{place.date}</span>
                                   </div>
                            </div>
                     )) : null}

              </>
       )
}
