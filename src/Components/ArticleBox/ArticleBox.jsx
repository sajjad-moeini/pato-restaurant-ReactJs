import React, { useEffect, useState } from 'react'
import './ArticleBox.css'
import Btn from '../Btn/Btn'
import { Link } from 'react-router-dom'
import store from '../../store'
export default function ArticleBox() {
       const [articles,setArticles] = useState([])
       useEffect(()=>{
              setArticles([...store.blog.articles])
       },[])
       return (
              <>
                     {
                           articles && articles.map(article => (
                                   <div className=' d-flex flex-column blog-article-container py-5 pbs5' key={article.id}>
                                          <div className="blog-article-img-container  position-relative">
                                                 <img src={article.img} className='img-fluid article-blog-img' alt="1" />
                                                 <div className="blog-article-date position-absolute d-flex-centring flex-column">
                                                        <div className='fs-1 fw-bolder text-light'>{article.day}</div>
                                                        <div className='text-light'>{article.date}</div>
                                                 </div>
                                          </div>
                                          <Link className="blog-article-title ls" to={`./${article.id}`}>
                                                 {article.title}
                                          </Link>
                                          <span className='blog-article-inf text-secondary'>
                                                 by Admin |
                                                 12 December, 2018 |
                                                 Cooking, Food |
                                                 8 Comments
                                          </span>
                                          <p className='text-secondary  mt-3'>
                                                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                                          </p>
                                          <div className="blog-article-btn-container ">
                                                 <Btn title={'CONTINUE READING'}  href={`${article.id}`} />
                                          </div>
                                   </div>
                            ))
                      }

              </>
       )
}