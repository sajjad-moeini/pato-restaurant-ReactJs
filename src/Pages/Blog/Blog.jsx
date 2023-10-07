import React, { useEffect, useState } from 'react'
import './Blog.css'
import store from '../../store'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, Outlet } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import BlogMostPopularSection from '../../Components/BlogMostPopularSection/BlogMostPopularSection';

export default function Blog() {
       const [articles, setArticles] = useState([])
       const [breadCrumb, setBreadCrumb] = useState([])
       const [blogCategory, setBlogCategory] = useState([])
       const [archives,setArchives] = useState([])
       useEffect(() => {
              document.title = 'Blog'
              setArticles([...store.blog.articles])
              setBreadCrumb([...store.blog.mainPageBreadcrumb])
              setBlogCategory([...store.blog.category])
              setArchives([...store.blog.archives])
       }, [])
       return (
              <>
                     <div className="blog-page-bg text-light d-flex-centring ls fw-bolder">
                            BLOG
                     </div>
                     <div className='blogPage-beadCrumb-container'>
                            <Breadcrumb>
                                   {breadCrumb ? breadCrumb.map((item, index) => (
                                          <Link to={item.href} key={index} className={item.title == 'Blog' ? 'activeCrumb breadCrubmb-it breadcrumb-item' : 'breadCrubmb-it breadcrumb-item'}>
                                                 {item.title}
                                          </Link>
                                   )) : null}
                            </Breadcrumb>
                     </div>

                     <div className="row">
                            <div className="col-12 col-sm-8 order-2 order-sm-1 blog-articles-container">
                            <Outlet />
                            </div>
                            <div className="col-12 col-sm-4 order-1 px-5">
                                   <div className="blog-page-searchbar-container position-relative row mx-auto mt-4">
                                          <input type="text" className='form-control px-3 py-1 bg-light' placeholder='Search' />
                                          <div className=' position-absolute blog-search-icon-container d-flex-centring'>
                                                 <BiSearchAlt className='blog-search-icon' />
                                          </div>
                                   </div>
                                   <div className='blog-category'>
                                          <div className="h4 ms-4 my-3 ls mb-5">CATEGORIES</div>
                                          <div className=' d-flex flex-column mx-4'>
                                                 {blogCategory ? (
                                                        blogCategory.map((item, index) => (
                                                               <Link to={'/blog'} className='blog-category-item my-2' key={index}>
                                                                      {item}
                                                               </Link>
                                                        ))
                                                 ) : null}
                                          </div>
                                   </div>
                                   <div className='blog-most-popular mt-5'>
                                          <div className="h4 ms-4 my-3 ls mb-5">MOST POPULAR</div>
                                   </div>
                                   <BlogMostPopularSection />
                                   <div className="h4 ms-4 my-3 ls my-5">ARCHIVE</div>
                                   <div className='blog-archive-container px-4 mb-5'>
                                          {
                                                 archives ? archives.map((archive,index)=>(
                                                        <div className="d-flex justify-content-between" key={index}>
                                                        <Link className='archive-title'>{archive.title}</Link>
                                                        <span className='archive-count'>{archive.count}</span>
                                                 </div>
                                                 )) :null
                                          }
                                         
                                   </div>

                            </div>
                     </div>
              </>
       )
}
