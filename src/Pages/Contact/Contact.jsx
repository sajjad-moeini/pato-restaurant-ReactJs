import React from 'react'
import './Contact.css'
import { MdLocationOn } from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {BsClockFill} from 'react-icons/bs'
export default function Contact() {
       return (

              <div className="contact-container">
                     <div className="contact-bg d-flex-centring  w-100 text-light">
                            CONTACT
                     </div>
                     <div className="contact-us-wrapper mx-auto py-5">
                            <div className="contact-us-title d-flex-centring ls">
                                   SEND US A MESSAGE
                            </div>
                            <div className="contact-us-form py-4">
                                   <div className="row">
                                          <div className="col-12 col-sm-4 my-2">
                                                 <label className=' form-label'>
                                                        Name
                                                 </label>
                                                 <input type="text" className="form-control p-2" placeholder='Name' />
                                          </div>
                                          <div className="col-12 col-sm-4 my-2">
                                                 <label className=' form-label'>
                                                        Email
                                                 </label>
                                                 <input type="text" className="form-control p-2" placeholder='Email' />
                                          </div>
                                          <div className="col-12 col-sm-4 my-2">
                                                 <label className=' form-label'>
                                                        Phone
                                                 </label>
                                                 <input type="text" className="form-control p-2" placeholder='Phone' />
                                          </div>

                                   </div>
                                   <div className="row">
                                          <div className="col-12 my-2">
                                                 <label className='form-label'>
                                                        Message
                                                 </label>
                                                 <textarea className='form-control p-2' placeholder='Message' cols="30" rows="10"></textarea>
                                          </div>
                                   </div>
                                   <div className=" d-flex-centring contact-us-btn-container mt-5">
                                          <a className="btn contact-us-submit-btn">
                                                 SUBMIT
                                          </a>
                                   </div>
                            </div>
                            <div className="my-infos row py-5 my-5">
                                   <div className="my-info col-12 col-sm-4">
                                          <div className="row">
                                                 <div className="col-4 d-flex justify-content-center align-items-start">
                                                        <MdLocationOn className='my-info-icon' />

                                                 </div>
                                                 <div className="col-8">
                                                        <div className='contact-us-title ls mb-3'>LOCATION</div>
                                                        <span className='text-secondary my-info-subtitle'>Tehran-Gholhak</span>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="my-info col-12 col-sm-4">
                                          <div className="row">
                                                 <div className="col-4 d-flex justify-content-center align-items-start">
                                                        <FiPhoneCall className='my-info-icon' />

                                                 </div>
                                                 <div className="col-8">
                                                        <div className='contact-us-title ls mb-3'>
                                                               CALL US</div>
                                                        <span className='text-secondary my-info-subtitle'>(+98) 9195805686</span>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="my-info col-12 col-sm-4">
                                          <div className="row">
                                                 <div className="col-4 d-flex justify-content-center align-items-start">
                                                        <BsClockFill className='my-info-icon' />

                                                 </div>
                                                 <div className="col-8">
                                                        <div className='contact-us-title ls mb-3'>OPENING HOURS</div>
                                                        <span className='text-secondary my-info-subtitle'>09:30 AM – 11:00 PM</span><br />
                                                        <span className='text-secondary my-info-subtitle'>Every Day</span>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>

              </div>

       )
}
