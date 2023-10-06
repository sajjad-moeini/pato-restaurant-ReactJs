import React, { useEffect, useState } from 'react'
import './Blog.css'
import store from '../../store'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
export default function Blog() {
       const [articles,setArticles] = useState([])
       useEffect(()=>{
              setArticles([...store.blog.articles])
       },[])
       return (
              <>
                     <div className="blog-page-bg text-light d-flex-centring ls fw-bolder">
                            BLOG
                     </div>
                     <div className="row">
                            <div className="col-12 col-sm-8 order-2 order-sm-1 ">
                                {articles.length >0 ? <ArticleBox articles={articles} /> : null }  
                            </div>
                            <div className="col-12 col-sm-4 order-1 order-sm-2">2222</div>
                     </div>
              </>
       )
}
