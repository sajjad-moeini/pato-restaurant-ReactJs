import React, { useEffect, useState } from 'react'
import './ChefBox.css'
import store from '../../store'
export default function ChefBox() {
       const [chefs, setChefs] = useState([])
       useEffect(() => {
              setChefs([...store.chefs])
       }, [])
       return (
              <>
                     {chefs && chefs.map((chef, index) => (
                            <div className="col-12 col-md-4" key={index}>
                                   <div className="our-chef-box d-flex-centring flex-column position-relative">
                                          <div className="chef-pic-container position-absolute">
                                                 <img src={chef.imgSrc} alt="chef-img" className='w-100 h-100 chef-pic' />
                                          </div>
                                          <div className="h5 chef-name ls">
                                                 {chef.name}
                                          </div>
                                          <span className='chef-title text-secondary'>
                                                 {chef.title}
                                          </span>
                                          <p className='chef-box-title text-secondary text-center'>
                                                 {chef.desc}
                                          </p>

                                   </div>
                            </div>

    ))
}
    </>
  )
}
