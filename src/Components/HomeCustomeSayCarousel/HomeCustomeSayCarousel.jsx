import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeCustomeSayCarousel.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import store from '../../store';
export default function HomeCustomeSayCarousel() {
       const customers = store.HomeCustomerSay
       return (
              <Carousel >
                     {
                            customers.map((customer, index) => (
                                   <Carousel.Item className='py-5 overflow-hidden' key={index} >
                                          <div className="d-flex flex-column justify-content-center align-items-center w-75 mx-auto">
                                                 <div className="user-pic-container rounded-circle overflow-hidden ">
                                                        <img src={customer.img} className='img-fluid customer-say-img' alt="customersay-item-img" />
                                                 </div>
                                                 <div className="customer-say-infs d-flex flex-column justify-content-center align-items-center">
                                                        <p class="customer-say-comment text-secondary text-center fs-5 my-3">
                                                               “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                                                        </p>
                                                        <div className="d-flex">
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                        </div>
                                                        <div className="h6 text-secondary my-4">

                                                               {customer.name} ˗ {customer.city}
                                                        </div>
                                                 </div>

                                          </div>

                                   </Carousel.Item>
                            ))
                     }



              </Carousel>
       )
}
