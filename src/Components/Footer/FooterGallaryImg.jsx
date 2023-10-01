import React, { useEffect, useState } from 'react'
import store from '../../store'
export default function FooterGallaryImg() {

       const [gallaryImgSrces, setGallaryImgSrces] = useState([])
       useEffect(() => {
              setGallaryImgSrces([... store.footerImgSrc])
       }, [])

       return (
             <>
             {
              gallaryImgSrces.map((img,index)=>{
                     return(
                            <section className="col-3 mb-2 footer-gallary-img-container" key={index}>
                            <img src={img} className='img-fluid footer-gallary-img rounded-2' alt={`gallaryImg${index}`} />
                     </section>
                     )
                  })
             }
             </>
       )
}
