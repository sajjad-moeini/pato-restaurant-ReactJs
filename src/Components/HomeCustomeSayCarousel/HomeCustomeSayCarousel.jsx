import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeCustomeSayCarousel.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import store from '../../store';
export default function HomeCustomeSayCarousel() {
       const [customers,setCustomers] = useState([])
       useEffect(()=>{
              setCustomers([...store.HomeCustomerSay])
       },[])
       
       return (
              <Carousel >
                     {
                            customers.map((customer, index) => (
                                   <Carousel.Item className='py-5 overflow-hidden' key={index} >
                                          <section className="d-flex flex-column justify-content-center align-items-center w-75 mx-auto">
                                                 <section className="user-pic-container rounded-circle overflow-hidden ">
                                                        <img src={customer.img} className='img-fluid customer-say-img' alt="customersay-item-img" />
                                                 </section>
                                                 <section className="customer-say-infs d-flex flex-column justify-content-center align-items-center">
                                                        <p className="customer-say-comment text-secondary text-center fs-5 my-3">
                                                               “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                                                        </p>
                                                        <section className="d-flex">
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                               <AiFillStar />
                                                        </section>
                                                        <section className="h6 text-secondary my-4">

                                                               {customer.name} ˗ {customer.city}
                                                        </section>
                                                 </section>

                                          </section>

                                   </Carousel.Item>
                            ))
                     }



              </Carousel>
       )
}
