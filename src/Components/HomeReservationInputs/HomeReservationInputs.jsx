import React, { useEffect, useState } from 'react'
import store from '../../store'
export default function HomeReservationInputs({inputs,col}) {
   console.log(inputs)
  return (
    <>
    {inputs && inputs.map((input,index)=>{
       if(input.type == 'input'){
              return(
              <section key={index} className={`col-12 col-md-${col} p-3`}>
                <span>{input.title}</span>
                <input type={input.inputType} className='form-control mt-1'  />
              </section>
              )
       }else if(input.type == 'option'){
              return(
              <section key={index} className={`col-12 col-md-${col} p-3`}>
              <a>{input.title}</a>
                <select disabled className='w-100 mt-1'>
                  <option className='form-control ' value="-1">{input.value}</option>
                </select>
              </section>
              )
       }else{return null}
    })}
    </>
  )
}
