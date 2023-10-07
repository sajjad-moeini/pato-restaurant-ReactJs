import React, { useEffect, useState } from 'react'
import store from '../../store'
import { Link } from 'react-router-dom'
export default function BlogSingleArticles() {
       const [articleId, setArticleId] = useState('')
       const [Articles, setArticles] = useState([])



       useEffect(() => {
              setArticleId(+location.pathname.slice(14))
              setArticles([...store.blog.articles])
       }, [])

       return (
              <>
                     {Articles ? Articles.filter(art => art.id == articleId).map((article)=>(
                            <>
                            <div className=' d-flex flex-column blog-article-container py-5 pbs5' key={article.id}>
                                   <div className="blog-article-img-container  position-relative">
                                          <img src={`../${article.img}`} className='img-fluid article-blog-img' alt="1" />
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
                            </div>
                            </>
                     ))
                            
                            : null}
              </>
       )
}
