import React from 'react'
import './MenuItems.css'
export default function MenuItems({ title, foods }) {
       return (
              <>
                     <section className="h3 ls mt-5">{title}</section>
                     {foods.map((food, index) => (
                            <section className='food-box mt-4' key={index}>
                                   <section className="d-flex w-75">
                                          <section className=" food-name ls d-flex-centring ">
                                                 {food.name}
                                          </section>
                                          <section className='dots-container d-flex-centring pt-2'>
                                          <p className='dots ls'>............................................................................................................</p>
                                          </section>
                                          <section className="food-price d-flex-centring">
                                                 ${food.price}
                                          </section>
                                   </section>
                                   <span className="food-infos text-secondary">
                                          {food.desc}
                                   </span>
                            </section>
                     ))}

              </>
       )
}
