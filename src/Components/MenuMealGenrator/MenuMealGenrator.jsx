import React from 'react'
import './MenuMealGenrator.css'
export default function MenuMealGenrator({ meal }) {

       return (
              <>
                     <div className="row meals-container mx-auto">
                            {meal.map((food, index) => (
                                   <div className="col-12 col-md-6 meal-food-box mt-5" key={index}>
                                          <div className="row mx-auto">
                                                 <div className="col-12 col-md-6 p-0 justify-content-center d-flex meal-img-container w-25">
                                                        <img src={food.imgSrc} className=' h-100 w-100 meal-img' alt="mealFood" />
                                                 </div>
                                                 <div className="col-12 col-md-6 d-flex flex-column ">
                                                        <a href="#" className='meal-food-name ls mt-2'>{food.name}</a>
                                                        <p className='meal-food-info mt-2'>{food.desc}</p>
                                                        <div className='meal-food-price'>
                                                               ${food.price}
                                                        </div>
                                                 </div>
                                          </div>

                                   </div>
                            ))}

                     </div>
              </>
       )
}
