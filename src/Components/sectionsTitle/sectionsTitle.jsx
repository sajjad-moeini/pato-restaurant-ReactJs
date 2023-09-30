import React from 'react'
import './sectionsTitle.css'
export default function sectionsTitle({title,subTitle}) {
  return (
    <>
     <div className="h3 discover-section-subtitle">{subTitle}</div>
        <div className="h1 discover-section-title">{title}</div>
    </>
  )
}
