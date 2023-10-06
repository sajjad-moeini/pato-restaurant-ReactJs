import React, { useEffect, useState } from 'react'
import './Blog.css'
import store from '../../store'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';


export default function Blog() {
       const [articles, setArticles] = useState([])
       const [breadCrumb, setBreadCrumb] = useState([])
       useEffect(() => {
              setArticles([...store.blog.articles])
              setBreadCrumb([...store.blog.mainPageBreadcrumb])
       }, [])
       return (
              <>
                     <div className="blog-page-bg text-light d-flex-centring ls fw-bolder">
                            BLOG
                     </div>
                     <div className='blogPage-beadCrumb-container'>
                            <Breadcrumb>
                                   {breadCrumb ? breadCrumb.map((item, index)=>(
                                          <Breadcrumb.Item key={index} >
                                          <Link to={item.href} className={item.title == 'Blog' ? 'activeCrumb' : null}>
                                                 {item.title}
                                          </Link>
                                   </Breadcrumb.Item>
                                   )) : null}
                            </Breadcrumb>
                     </div>

                     <div className="row">
                            <div className="col-12 col-sm-8 order-2 order-sm-1 blog-articles-container">
                                   {articles.length > 0 ? <ArticleBox articles={articles} /> : null}
                            </div>
                            <div className="col-12 col-sm-4 order-1 order-sm-2">2222</div>
                     </div>
              </>
       )
}
