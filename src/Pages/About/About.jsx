import React from 'react'
import './About.css'
import SpecialSignUp from './../../Components/SpecialSIgnUp/SpecialSIgnUp'
import SectionsTitle from '../../Components/sectionsTitle/sectionsTitle'
import { AiFillPlayCircle } from 'react-icons/ai'
import ChefBox from '../../Components/ChefBox/ChefBox'
import { useEffect } from 'react'
export default function About() {
       useEffect(()=>{document.title = 'ABOUT'},[])
       return (
              <>
                     <div className="about-page-bg d-flex-centring ls text-light">
                            About
                     </div>
                     <div className=' d-flex-centring flex-column about-page-story-section'>
                            <SectionsTitle title={'OUR STORY'} subTitle={'Italian Restaurant'} titleColor={'black'} />
                            <div className="about-page-story-desc-container mx-auto text-secondary text-center">
                                   Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
                            </div>
                     </div>
                     <section className="about-our-video-section">
                            <section className="about-our-video-wrapper h-100 w-100  d-flex flex-column justify-content-center align-items-center">
                                   <SectionsTitle title={'OUR VIDEO'} subTitle={'Discover'} titleColor={'#fff'} />
                                   <section className='play-icon-container'>
                                          <AiFillPlayCircle />
                                   </section>
                            </section>
                     </section>
                     <div className="row py-5 our-story-pics-container">
                            <div className="col-12 col-md-6 d-flex-centring flex-column my-5">
                                   <SectionsTitle title={'RECIPES'} subTitle={'Delicious'} titleColor={'black'} />
                                   <p className='about-page-story-desc-container mx-auto text-secondary text-center'>
                                   Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                                   </p>
                            </div>
                            <div className="col-12 col-md-6 my-5 d-flex-centring">
                                   <div className="DeliciousSection-img-container">
                                          <img src="img/about/our-story-01.jpg.webp" className='img-fluid' alt="" />
                                   </div>
                            </div>
                            <div className="col-12 col-md-6 my-5 d-flex-centring">
                                   <div className="DeliciousSection-img-container ">
                                          <img src="img/about/our-story-02.jpg.webp" className='img-fluid' alt="" />
                                   </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex-centring flex-column my-5">
                                   <SectionsTitle title={'RESTAURANT'} subTitle={'Romantic'} titleColor={'black'} />
                                   <p className='about-page-story-desc-container mx-auto text-secondary text-center'>
                                   Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.
                                   </p>
                            </div>
                            
                     </div>
                     <div className="about-page-second-bg"></div>
                     <div className="our-chef d-flex-centring flex-column py-5">
                            <SectionsTitle title={'CHEF'} subTitle={'Meet Our'} titleColor={'black'} />
                            <div className="row chef-boxes-container mx-auto">
                                   <ChefBox />
                           </div>
                     </div>
                     <SpecialSignUp />
              </>
       )
}
