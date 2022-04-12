import React from 'react'
import HeadPraa from './HeadPraa'
import ImageTitles from './ImageTitles'

function Sixthpage() {
  return (<div>
    <div className='headpara'>
      <HeadPraa />
    </div>
    <img className='imageeeee' src={'./Joale - Branding & Design Digital Creative Agency PSD Template6.jpeg'} />
    <div style={{ display: "flex", flexWrap: "nowwrap", top: "315px", position: "absolute" }}>
      <div >
        <ImageTitles title="Creative Commitioned Works Mid 2018,Waya Agency" />
      </div>
      <div style={{ marginLeft: "9px" }}>
        <ImageTitles title="Creative Commitioned Works Mid 2018,Waya Agency" />
      </div>
      <div>
        <ImageTitles title="Creative Commitioned Works Mid 2018,Waya Agency" />
      </div>
    </div>

  </div>
  )
}

export default Sixthpage