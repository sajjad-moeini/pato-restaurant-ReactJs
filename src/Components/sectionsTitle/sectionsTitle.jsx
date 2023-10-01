import React from 'react'
import './sectionsTitle.css'
export default function SectionsTitle({title,subTitle,titleColor}) {
  return (
    <>
     <section className="h3 section-subtitle">{subTitle}</section>
        <section className="h1 section-title" style={{color:titleColor}}>{title}</section>
    </>
  )
}
