import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Btn({title}) {
  return (
       <Link className='welcome-section-btn btn'>
            {title}<AiOutlineArrowRight />
          </Link>
  )
}
