import React from 'react'
import './MenuItems.css'
export default function MenuItems({ title, foods }) {
       return (
              <>
                     <div className="h3 ls mt-5">{title}</div>
                     {foods.map((food, index) => (
                            <section className='food-box mt-4' key={index}>
                                   <div className="d-flex w-75">
                                          <div className=" food-name ls d-flex-centring ">
                                                 {food.name}
                                          </div>
                                          <div className='dots-container d-flex-centring pt-2'>
                                          <p className='dots ls'>............................................................................................................</p>
                                          </div>
                                          <div className="food-price d-flex-centring">
                                                 ${food.price}
                                          </div>
                                   </div>
                                   <span className="food-infos text-secondary">
                                          {food.desc}
                                   </span>
                            </section>
                     ))}

              </>
       )
}
