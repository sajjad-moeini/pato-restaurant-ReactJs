import React, { useEffect, useState } from 'react'
import { useCountdown } from '../../Hooks/useCountdown'
import Carousel from 'react-bootstrap/Carousel';
import './HomeEventUpcoming.css'
import store from '../../store';
import SectionsTitle from '../sectionsTitle/sectionsTitle';
import TimerBox from '../TimerBox/TimerBox';
import Btn from '../Btn/Btn';

export default function HomeEventUpcoming() {
       const [imgBadgeClass,setimgBadgeClass] =useState('')
       const [upcomingEvents,setupcomingEvents] = useState([])
       useEffect(()=>{
              setupcomingEvents([...store.upcomingEventCarousel])
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
       },[])

    
       
       
       return (
              <>
                     <Carousel id='upcoming-carousel'>
                            {
                                   upcomingEvents.map((event, index) => (
                                          <Carousel.Item key={index} className='upcoming-carousel-item' >
                                                 <section className="upcoming-carousel-container " >
                                                        <img src={event.bgImg} alt="bg" />
                                                 </section>
                                                 <section className="upcoming-box-container ">
                                                        <SectionsTitle  subTitle={'Upcoming'} title={'EVENTS'} titleColor={'#fff'} />
                                                        <section className="upcoming-event-box mt-5" style={{animation: event.boxAnim}}>
                                                               <section className="row">
                                                                      <section className="col-12 col-lg-6 h-100 position-relative overflow-hidden">
                                                                             <section className="h-100 w-100">
                                                                             <img src={event.boxImg} className='img-fluid h-100 w-100' alt="boxImg" />
                                                                             </section>
                                                                             
                                                                             <span className={`box-img-badge ${imgBadgeClass}`}>
                                                                                    {event.badgeTitle}
                                                                             </span>
                                                                      </section>
                                                                      <section className="col-12 col-lg-6 event-box-inf-container">
                                                                             <section className="h5 event-box-inf-title">
                                                                                    Wines during specific nights                              </section>
                                                                             <p className="event-box-inf-desc">
                                                                                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                                                                             </p>
                                                                             <TimerBox />
                                                                             <section className="my-4">
                                                                             <Btn title={'VIEW DETAILES '} />
                                                                             </section>
                                                                      </section>
                                                               </section>
                                                        </section>

                                                 </section>
                                          </Carousel.Item>
                                   ))
                            }
                     </Carousel>
              </>
       )
}





