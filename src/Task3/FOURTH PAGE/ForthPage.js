import React from 'react'
import Work from './Work'

function ForthPage() {
  return (<div>
    <div className='work'>
        <div style={{marginLeft:"-20px"}}>

        <Work type="01 / Planning"  imgfile={'./Joale - Branding & Design Digital Creative Agency PSD TemplateJ.jpeg'}/>
        </div>
        <div style={{color:"#fd8196"}}>
        <Work type="02 / Development"  imgfile={'./Joale - Branding & Design Digital Creative Agency PSD TemplateH.jpeg'}/>

        </div>
        <Work type="03 / Promotion" imgfile={'./Joale - Branding & Design Digital Creative Agency PSD TemplateB.jpeg'}/>
        <Work type="04 / Design" imgfile={'./Joale - Branding & Design Digital Creative Agency PSD TemplateM.jpeg'}/>
    </div>
    <img className='bigimg' src={'./Joale - Branding & Design Digital Creative Agency PSD Templatel.jpeg'}/>
    </div>
  )
}

export default ForthPage