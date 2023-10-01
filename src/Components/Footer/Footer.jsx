import React from 'react'
import './Footer.css'
import {FiPhoneCall,FiMail} from 'react-icons/fi'
import {FaLocationDot} from 'react-icons/fa6'
import { AiOutlineTwitter } from 'react-icons/ai'
import FooterGallaryImg from './FooterGallaryImg'

export default function Footer() {
  return (
    <>
   <section className='footer-container d-flex-centring'>
       <section className='row  w-75 h-75'>
   <section className="col-12 col-md-4 mt-5">
       <section className="h4 footer-title mb-4">CONTACT US</section>
       <ul className='footer-list'>
              <li className='footer-item my-2'>
                     <FaLocationDot />  Tehran-Gholhak
              </li>
              <li className='footer-item my-2'>
                     <FiPhoneCall />  (+98) 9195805686
              </li>
              <li className='footer-item my-2'>
                     <FiMail /> sajjadmoeini97@gmail.com
              </li>
       </ul>
       <section className="h4 footer-title mb-4">OPENING TIMES</section>
       <ul className='footer-list'>
              <li className='footer-item my-2'>09:30 AM – 11:00 PM</li>
              <li className='footer-item my-2'>Every Day</li>
       </ul>
    </section>
    <section className="col-12 col-md-4 mt-5">
    <section className="h4 footer-title mb-4">LATEST TWITTER</section>
    <section className="h6">
    <AiOutlineTwitter className='text-light' /> <span className='text-danger'>@sajjad</span>
    <p className='text-secondary'>Activello is a good option. It has a slider built into that displays the featured image in the slider. <a href="https://github.com/sajjad-moeini">https://github.com/sajjad-moeini</a></p>
    <AiOutlineTwitter className='text-light' /> <span className='text-danger'>@sajjad</span>
    <p className='text-secondary'>Activello is a good option. It has a slider built into that displays the featured image in the slider. <a href="https://github.com/sajjad-moeini">https://github.com/sajjad-moeini</a></p>
    </section>
    </section>
    <section className="col-12 col-md-4 mt-5">
    <section className="h4 footer-title mb-4">GALLERY</section>
       <section className="row mb-4">
             <FooterGallaryImg />
       </section>
    </section>
   </section>
   </section>
    </>
  )
}
