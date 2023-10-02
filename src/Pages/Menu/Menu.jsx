import React, { useEffect, useState } from 'react'
import './Menu.css'
import store from '../../store'
import MenuItems from '../../Components/MenuItems/MenuItems'
export default function Menu() {
       const [menuItems,setMenuItems]=useState({})
       useEffect(()=>{
              setMenuItems({... store.menu })
       },[])
       return (
              <>
                     <section className='menu-header-bg-section w-100 d-flex-centring'>
                            <div className="h1 menu-header-bg-section-title ls">PATO MENU</div>
                     </section>
                     <section className='row foods-menu-container'>
                            <div className="col-12 col-md-6">
                                   <MenuItems {...menuItems.starters} />
                                   <MenuItems {...menuItems.drinks} />
                            </div>
                            <div className="col-12 col-md-6">
                            <MenuItems {...menuItems.main} />
                                   <MenuItems {...menuItems.dessert} />
                            </div>
                     </section>
              </>
       )
}
