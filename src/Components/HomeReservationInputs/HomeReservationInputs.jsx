import React, { useEffect, useState } from 'react'
import store from '../../store'
export default function HomeReservationInputs() {
  const [inputs,setInputs] = useState([])
  useEffect(()=>{
    setInputs([...store.homeReservtionSection])
  },[])
   
  return (
    <>
    {inputs.map((input,index)=>{
       if(input.type == 'input'){
              return(
              <section key={index} className="col-12 col-md-6 p-3">
                <span>{input.title}</span>
                <input type={input.inputType} className='form-control mt-1'  />
              </section>
              )
       }else if(input.type == 'option'){
              return(
              <section key={index} className="col-12 col-md-6 p-3">
              <span>{input.title}</span>
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
