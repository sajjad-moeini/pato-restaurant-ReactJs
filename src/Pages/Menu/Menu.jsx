import React, { useEffect, useState } from 'react'
import './Menu.css'
import store from '../../store'
import MenuItems from '../../Components/MenuItems/MenuItems'
import MenuMealGenrator from '../../Components/MenuMealGenrator/MenuMealGenrator'
import SpecialSIgnUp from '../../Components/SpecialSIgnUp/SpecialSIgnUp'
export default function Menu() {
       const [menuItems, setMenuItems] = useState({})
       useEffect(() => {
              setMenuItems({ ...store.menu })
              document.title = 'MENU'
       }, [])
       return (
              <>
                   <section className="menu">
                   <section className='menu-header-bg-section w-100 d-flex-centring'>
                            <section className="h1 menu-header-bg-section-title ls">PATO MENU</section>
                     </section>
                     <section className='row foods-menu-container'>
                            <section className="col-12 col-md-6">
                                 {menuItems.starters ? <MenuItems {...menuItems.starters} /> :null }  
                                 {menuItems.drinks ? <MenuItems {...menuItems.drinks} /> :null }  
                            </section>
                            <section className="col-12 col-md-6">
                            {menuItems.main ? <MenuItems {...menuItems.main} /> :null }  
                            {menuItems.dessert ? <MenuItems {...menuItems.dessert} /> :null }  
                            </section>
                     </section>
                     <section className='menu-bg lunch-bg d-flex-centring  ls text-light'>
                     LUNCH
                     </section>
                     <MenuMealGenrator meal={store.menu.lunch} />
                     <section className='menu-bg dinner-bg d-flex-centring  ls text-light'>
                        DINNER
                     </section>
                     <MenuMealGenrator meal={store.menu.dinner} />
                     <SpecialSIgnUp />
                   </section>
              </>
       )
}
