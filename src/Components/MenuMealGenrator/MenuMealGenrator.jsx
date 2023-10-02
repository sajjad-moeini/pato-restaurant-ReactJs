import React from 'react'
import './MenuMealGenrator.css'
export default function MenuMealGenrator({ meal }) {

       return (
              <>
                     <section className='meals-container'>
                            <section className="row  mx-auto meals-wrapper">
                                   {meal.map((food, index) => (
                                          <section className="col-12 col-md-6 meal-food-box mt-5" key={index}>
                                                 <section className="row mx-auto">
                                                        <section className="col-12 col-md-6 p-0 justify-content-center d-flex meal-img-container w-25">
                                                               <img src={food.imgSrc} className=' h-100 w-100 meal-img' alt="mealFood" />
                                                        </section>
                                                        <section className="col-12 col-md-6 d-flex flex-column ">
                                                               <a href="#" className='meal-food-name ls mt-2'>{food.name}</a>
                                                               <p className='meal-food-info mt-2'>{food.desc}</p>
                                                               <section className='meal-food-price'>
                                                                      ${food.price}
                                                               </section>
                                                        </section>
                                                 </section>

                                          </section>
                                   ))}

                            </section>
                     </section>
              </>
       )
}
