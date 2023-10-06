import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './Btn.css'

export default function Btn({title,href}) {
  return (
       <Link className='section-btn btn' to={href ? href : '/'}>
            {title}<AiOutlineArrowRight />
          </Link>
  )
}
