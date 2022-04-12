import React from 'react'
import './Leftside.css';
function Leftside() {
  return (
    <div className='splitl left'>

      {/* <h5 style={{padding: "426px 425px 17px 42px",
    position: "absolute",color:"whitesmoke"}}>Email</h5>
    <h6>quicksayed@gmail.com</h6> */}
      <form style={{
       bottom:"0" ,left:"0",
        position: "absolute", color: "whitesmoke"
      }}>
        <h5 style={{ marginRight: "143px" ,marginBottom:"2px"}}>Email</h5>
        <div style={{ marginRight: "19px" }}>quicksayed@gmail.com</div>
        <h5 style={{ marginRight: "135px",marginBottom:"2px" }}>Phone</h5>
        <div style={{ marginRight: "94PX" }}>+8984073025</div>
        <h5 style={{ marginRight: "89PX" }}>Find me on</h5>
      <div style={{marginLeft: "58px"}}>
      <a href="#" className='iconsfa fa fa-facebook '></a>
        <a href="#" class="iconsfa fa fa-twitter "></a>
        <a href="#" class="iconsfa fa fa-youtube "></a>
        <a href="#" class="iconsfa fa fa-dribbble "></a>
      </div>
      </form>


    </div>
  )
}

export default Leftside