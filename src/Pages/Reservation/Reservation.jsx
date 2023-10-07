import React from 'react'
import './Reservation.css'
import store from '../../store'
import SectionsTitle from '../../Components/sectionsTitle/sectionsTitle'
import HomeReservationInputs from '../../Components/HomeReservationInputs/HomeReservationInputs'
import { Link } from 'react-router-dom'
import SpecialSIgnUp from './../../Components/SpecialSIgnUp/SpecialSIgnUp'
import { useEffect } from 'react'

export default function Reservation() {
       useEffect(()=>{document.title = 'Reservation'},[])
       return (
              <>
                     <section className='reservation-header-bg d-flex-centring ls text-light'>
                            RESERVATION
                     </section>
                     <section className="reservation-book-table ">
                            <section className=' d-flex-centring flex-column'>
                                   <SectionsTitle title={'BOOK TABLE'} titleColor={"black"} subTitle={'Reservation'} />
                            </section>
                            <section className="inputs-container mx-auto">
                                   <section className='row px-5 pt-3 '>
                                   {store.reservationInputs && <HomeReservationInputs inputs={store.reservationInputs} col={4} /> }
                                   </section>
                            </section>
                            <section className=' d-flex-centring'>
                            <Link to={'/reservtion'} className='btn home-reservtion-btn'>BOOK TABLE</Link>
                            </section>
                            <section className="row reservation-rules-container mx-auto px-4">
                            <section className="col-12 col-md-6">
                                   <section className='reservation-title ls'>
                                   RESERVE BY PHONE
                                   </section>
                                   <p className='reservation-rule-infos text-secondary'>
                                   Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate , lectus vel volutpat efficitur, orci lacus sodales sem, sit amet quam: <span className='text-danger'>(+98) 9195805686</span>
                                   </p>
                            </section>
                            <section className="col-12 col-md-6">
                            <section className='reservation-title ls'>
                            FOR EVENT BOOKING
                                   </section>
                                   <p className='reservation-rule-infos text-secondary'>
                                   Donec feugiat ligula rhoncus: <span className='text-danger'>(+98) 9195805686</span> , varius nisl sed, tinci-dunt lectus sodales sem.
                                   </p>
                            </section>
                     </section>
                     </section>
                   <SpecialSIgnUp />
              </>
       )
}
