import React from 'react'

function Work(work) {
    return (
        <div>
            <img style={{   marginTop: "19px", marginBottom: "30px"}} src={work.imgfile}/>
            <h1 style={{fontSize:"21px",color:"black"}}>{work.type}</h1>
            <p style={{color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Enim reprehenderit fugit quae<br/>rat omnis veniam est corrupti laboriosam,nesciunt.</p>
            <h1 style={{fontSize: "18px",marginTop: "33px"}}>VIEW MORE</h1>
        </div>
    )
}

export default Work