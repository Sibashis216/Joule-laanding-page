import React from 'react'
import Bottomtextpara from './Bottomtextpara'
import HeadPara from './HeadPara'
import Topics from './Topics'
import "./Secondpage.css"

function Secondpage() {
  return (<div >
    <div style={{ top: "65px",
    left: "141px",
    textAlign: "initial",
    width: "145px",
    position: "absolute" }}>
      <Topics topic="1. About us" />
      <Topics topic="2. Our story" />
      <Topics topic="3. Our vision" />
    </div>
    <div>
      <HeadPara />
    </div>
    <Bottomtextpara/>
  <img className='image' src={'./Joale - Branding & Design Digital Creative Agency PSD Template.jpeg'}/>
  </div>


  )
}

export default Secondpage