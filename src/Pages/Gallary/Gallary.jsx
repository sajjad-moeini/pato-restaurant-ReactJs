import React, { useEffect, useState } from 'react'
import './Gallary.css'
import SpecialSIgnUp from '../../Components/SpecialSIgnUp/SpecialSIgnUp'
import { NavLink, Outlet } from 'react-router-dom'
import store from '../../store'
export default function Gallary() {
       
       const [gallaryMenuItems,setGallaryMenuItems] =useState([])
       
       useEffect(()=>{
              document.title = 'Gallary'
              
              setGallaryMenuItems(store.gallaryMenuItems)
       },[])
  return (
    <>
    <div className="gallary-page-bg w-100 d-flex-centring ls text-light">
       GALLARY
    </div>
    <div className=' d-flex flex-column flex-md-row justify-content-center align-items-center mt-5'>
       {gallaryMenuItems && gallaryMenuItems.map((item,index)=>(
              <NavLink to={item.path} key={index} className={(item =>(item.isActive ? 'active-gallary-nav-item gallary-nav-item' : 'gallary-nav-item'))}>{item.title}</NavLink>
       ))}
    </div>
    <div className="gallary-images-container">
    <Outlet />
    </div>
    <SpecialSIgnUp />
    </>
  )
}
