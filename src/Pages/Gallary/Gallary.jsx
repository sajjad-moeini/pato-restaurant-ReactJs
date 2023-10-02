import React from 'react'
import './Gallary.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function Gallary() {
  return (
    <>
    <div className="gallary-page-bg w-100 d-flex-centring ls text-light">
       GALLARY
    </div>
    <div className=' d-flex flex-column flex-md-row justify-content-center align-items-center'>
       <NavLink to={'./allPhotos'} className={(item =>(item.isActive ? 'active-gallary-nav-item' : 'gallary-nav-item'))}>ALL PHOTO</NavLink>
       <NavLink to={'./interior'} className={(item =>(item.isActive ? 'active-gallary-nav-item' : 'gallary-nav-item'))}>INTERIOR</NavLink>
       <NavLink to={'./food'} className={(item =>(item.isActive ? 'active-gallary-nav-item' : 'gallary-nav-item'))}>FOOD</NavLink>
       <NavLink to={'./events'} className={(item =>(item.isActive ? 'active-gallary-nav-item' : 'gallary-nav-item'))}>EVENTS</NavLink>
       <NavLink to={'./vipGhests'} className={(item =>(item.isActive ? 'active-gallary-nav-item' : 'gallary-nav-item'))}>VIP GUESTS</NavLink>
    </div>
    <div className="gallary-images-container">
    <Outlet />

    </div>
    </>
  )
}
