import React, { useState } from 'react'
import './HomeRestaurantProperty.css'
import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn'
import store from '../../store'
export default function HomeRestaurantProperty() {
        
       const [properties] = useState(store.restaurantPropertyBoxs)
       const[images] = useState(properties.images)
       const[titles] = useState(properties.titles)
       const[subTitles] = useState(properties.subTitles)
       return (
            
              <div className='resturant-property-section'>
              <div className='row property-boxes-wrapper'>
             {properties.images.map((img,index)=>(
                      
                             <div key={index} className='col-12 col-md-4 property-box-container'>
                                    <div className='rounded-3 mb-4 property-box-img-container'>
                                           <img src={img} alt="intro-01" className='img-fluid property-box-img' />
                                    </div>
                                  
                                    <Link to={'/'} className='h2 property-box-title' >
                                          {titles[index]}
                                    </Link>
                                    <p className='my-3 text-secondary'>
                                    {subTitles[index]}
                                    </p>
                                    <Btn title={'LEARN MORE '} />
                                   
                             </div>

                
               ))}
                </div>
               </div>
       )
}
  
