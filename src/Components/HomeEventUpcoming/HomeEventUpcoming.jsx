import React, { useState } from 'react'
import { useCountdown } from '../../Hooks/useCountdown'
import Carousel from 'react-bootstrap/Carousel';
import './HomeEventUpcoming.css'
import store from '../../store';
import SectionsTitle from '../sectionsTitle/sectionsTitle';
import TimerBox from '../TimerBox/TimerBox';
import Btn from '../Btn/Btn';

export default function HomeEventUpcoming() {
       const upcomingEvents = store.upcomingEventCarousel
       const [imgBadgeClass,setimgBadgeClass] =useState('')
       window.onresize =()=>{if(document.body.scrollWidth < 998 ){
              setimgBadgeClass('box-img-badge-horizontal')
       }else{
              setimgBadgeClass('box-img-badge-vertical')
       }}
       window.onload =()=>{
              if(document.body.scrollWidth > 998 ){
                     setimgBadgeClass('box-img-badge-vertical')
              }else{
                     setimgBadgeClass('box-img-badge-horizontal')
              }
       }
       return (
              <>
                     <Carousel id='upcoming-carousel'>
                            {
                                   upcomingEvents.map((event, index) => (
                                          <Carousel.Item key={index} className='upcoming-carousel-item' >
                                                 <div className="upcoming-carousel-container " >
                                                        <img src={event.bgImg} alt="bg" />
                                                 </div>
                                                 <div className="upcoming-box-container ">
                                                        <SectionsTitle  subTitle={'Upcoming'} title={'EVENTS'} titleColor={'#fff'} />
                                                        <div className="upcoming-event-box mt-5" style={{animation: event.boxAnim}}>
                                                               <div className="row">
                                                                      <div className="col-12 col-lg-6 h-100 position-relative overflow-hidden">
                                                                             <div className="h-100 w-100">
                                                                             <img src={event.boxImg} className='img-fluid h-100 w-100' alt="boxImg" />
                                                                             </div>
                                                                             
                                                                             <span className={`box-img-badge ${imgBadgeClass}`}>
                                                                                    {event.badgeTitle}
                                                                             </span>
                                                                      </div>
                                                                      <div className="col-12 col-lg-6 event-box-inf-container">
                                                                             <div className="h5 event-box-inf-title">
                                                                                    Wines during specific nights                              </div>
                                                                             <p className="event-box-inf-desc">
                                                                                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                                                                             </p>
                                                                             <TimerBox />
                                                                             <div className="my-4">
                                                                             <Btn title={'VIEW DETAILES '} />
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>

                                                 </div>
                                          </Carousel.Item>
                                   ))
                            }
                     </Carousel>
              </>
       )
}





