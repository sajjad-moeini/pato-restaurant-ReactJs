import React, { useEffect, useState } from 'react'
import './HomeRestaurantProperty.css'
import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn'
import store from '../../store'
export default function HomeRestaurantPropertyOrBoxes({type,badge,btnTitle}) {
        
       const [properties,setProperties] = useState([])
       useEffect(()=>{
              if(type == 'property'){
                     setProperties([... store.restaurantPropertyBoxs])
              }else if(type == 'blogs'){
                     setProperties([... store.restaurantBlogBoxs])
              }
       },[])
       return (
            
              <div className='resturant-property-section'>
              <div className='row property-boxes-wrapper'>
             {properties.map((property,index)=>(
                      
                             <div key={index} className='col-12 col-md-4 property-box-container'>
                                    <div className='rounded-3 mb-4 property-box-img-container position-relative'>
                                           <img src={property.img} alt="intro-01" className='img-fluid property-box-img' />
                                           {property.badgeTitle ? <span className='home-blog-badge position-absolute'>{property.badgeTitle}</span> : null}
                                           
                                    </div>
                                  
                                    <Link to={'/'} className='h2 property-box-title' >
                                          {property.title}
                                    </Link>
                                    <p className='my-3 text-secondary'>
                                    {property.subTitle}
                                    </p>
                                    <Btn title={btnTitle} />
                                   
                             </div>

                
               ))}
                </div>
               </div>
       )
}
  
