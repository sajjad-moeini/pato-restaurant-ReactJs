import React, { useEffect, useState } from 'react'
import './HomeRestaurantProperty.css'
import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn'
import store from '../../store'
export default function HomeRestaurantProperty() {
        
       const [properties,setProperties] = useState([])
       useEffect(()=>{
              setProperties([... store.restaurantPropertyBoxs])
       },[])
       return (
            
              <div className='resturant-property-section'>
              <div className='row property-boxes-wrapper'>
             {properties.map((property,index)=>(
                      
                             <div key={index} className='col-12 col-md-4 property-box-container'>
                                    <div className='rounded-3 mb-4 property-box-img-container'>
                                           <img src={property.img} alt="intro-01" className='img-fluid property-box-img' />
                                    </div>
                                  
                                    <Link to={'/'} className='h2 property-box-title' >
                                          {property.title}
                                    </Link>
                                    <p className='my-3 text-secondary'>
                                    {property.subTitle}
                                    </p>
                                    <Btn title={'LEARN MORE '} />
                                   
                             </div>

                
               ))}
                </div>
               </div>
       )
}
  
