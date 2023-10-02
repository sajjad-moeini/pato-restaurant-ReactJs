import React from 'react'
import './SpecialSIgnUp.css'
import { MdEmail} from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function SpecialSIgnUp() {
  return (
       <section className=" home-special-signup  py-5">
       <section className="row w-50 mx-auto d-flex-centring py-5">
         <section className="col-12 col-md-4 d-flex-centring mt-3">
           <section className="h4 home-special-signup-title">SPECIALS SIGN UP</section>
         </section>
         <section className="col-12 col-md-4 d-flex-centring mt-3 home-special-signup-input-container position-relative">
           <input type="text" placeholder='Email' className='form-control w-100' />
           <section className=' position-absolute special-sign-up-icon'>
             <MdEmail />
           </section>
         </section>
         <section className="col-12 col-md-4 d-flex-centring mt-3">
           <Link className='btn home-special-signup-btn'>Sign-Up</Link>
         </section>
       </section>
     </section>
  )
}
