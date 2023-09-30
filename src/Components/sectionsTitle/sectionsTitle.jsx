import React from 'react'
import './sectionsTitle.css'
export default function SectionsTitle({title,subTitle,titleColor}) {
  return (
    <>
     <div className="h3 section-subtitle">{subTitle}</div>
        <div className="h1 section-title" style={{color:titleColor}}>{title}</div>
    </>
  )
}
