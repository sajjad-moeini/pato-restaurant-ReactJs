import React, { useEffect, useState } from 'react'
import './Menu.css'
import store from '../../store'
import MenuItems from '../../Components/MenuItems/MenuItems'
import MenuMealGenrator from '../../Components/MenuMealGenrator/MenuMealGenrator'
export default function Menu() {
       const [menuItems, setMenuItems] = useState({})
       useEffect(() => {
              setMenuItems({ ...store.menu })
       }, [])
       return (
              <>
                     <section className='menu-header-bg-section w-100 d-flex-centring'>
                            <div className="h1 menu-header-bg-section-title ls">PATO MENU</div>
                     </section>
                     <section className='row foods-menu-container'>
                            <div className="col-12 col-md-6">
                                 {menuItems.starters ? <MenuItems {...menuItems.starters} /> :null }  
                                 {menuItems.drinks ? <MenuItems {...menuItems.drinks} /> :null }  
                            </div>
                            <div className="col-12 col-md-6">
                            {menuItems.main ? <MenuItems {...menuItems.main} /> :null }  
                            {menuItems.dessert ? <MenuItems {...menuItems.dessert} /> :null }  
                            </div>
                     </section>
                     <section className='menu-bg lunch-bg d-flex-centring  ls text-light'>
                     LUNCH
                     </section>
                     <MenuMealGenrator meal={store.menu.lunch} />
              </>
       )
}
