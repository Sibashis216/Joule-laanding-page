import React from 'react'
// import user from'./user.jpeg'
import ReactDOM  from 'react-dom'
// import  ReactDOM  from 'react'
function Addimage() {
  return ReactDOM.createPortal (
    <div>
      
       <img src={'./user.jpeg'} style={{width: "380px",
    height: "552px",
    position: "absolute",
    zIndex: "10",
    marginTop:"25px",
    marginLeft:"328px"}} >
      {/* <line style={{x1:"0", y1:"180", x2:"180", y2:"180"}}  /> */}
    </img>
   {/* <line x1="0" y1="180" x2="180" y2="180" style="stroke:rgb(255,0,0);stroke-width:5" /> */}
    </div>,
    document.getElementById('modal-root')
   
  )
}

export default Addimage