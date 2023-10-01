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
              <div key={index} className="col-12 col-md-6 p-3">
                <span>{input.title}</span>
                <input type={input.inputType} className='form-control mt-1'  />
              </div>
              )
       }else if(input.type == 'option'){
              return(
              <div key={index} className="col-12 col-md-6 p-3">
              <span>{input.title}</span>
                <select disabled className='w-100 mt-1'>
                  <option className='form-control ' value="-1">{input.value}</option>
                </select>
              </div>
              )
       }else{return null}
    })}
    </>
  )
}
