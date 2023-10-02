import React, { useEffect } from 'react'
import './GallaryPageImageGen.css'
import { BiSearchAlt } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function GallaryPageImageGen({ type }) {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className=' p-3 gallary-images-container'>
      <div className="row">
        {type.map((image, index) => (
          <div className="col-12 col-md-4 mt-3 rounded-3 gallary-img-container position-relative" data-aos="fade-left" key={index}>
            <img src={`../${image}`} className='img-fluid gallary-img rounded-3 cp' data-aos="flip-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic" alt={`gallaryimg${index + 1}`} />
            <div className="gallary-img-layout position-absolute d-flex-centring ">
              <BiSearchAlt className='gallary-img-search-icon text-light fs-1' />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
