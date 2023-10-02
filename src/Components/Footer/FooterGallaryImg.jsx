import React, { useEffect, useState } from 'react'
import store from '../../store'
export default function FooterGallaryImg() {
       const [isGallaryPage, setIsGallaryPage] = useState(false)
       const [gallaryImgSrces, setGallaryImgSrces] = useState([])
       window.onload = () => {
              if (document.title == 'Gallary') {
                     setIsGallaryPage(true)
              }
       }
       useEffect(() => {        
              setGallaryImgSrces([...store.footerImgSrc])
       }, [])

       return (
              <>
                     {
                            gallaryImgSrces.map((img, index) => {
                                   return (
                                          <section className="col-3 mb-2 footer-gallary-img-container" key={index}>
                                                 <img src={isGallaryPage ? `../${img}` : img} className='img-fluid footer-gallary-img rounded-2' alt={`gallaryImg${index}`} />
                                          </section>
                                   )
                            })
                     }
              </>
       )
}
