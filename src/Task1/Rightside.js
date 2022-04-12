import React from 'react'
import './Rightside.css';
import { Button } from 'react-bootstrap';
import Leftside from './Leftside';
function Rightside() {
    return (
        <div className='split right'>


            <form style={{ marginTop: "130PX" }}>
                <div style={{ marginTop: "30px" }}>
                    <h2 style={{ marginLeft: "-18px", marginBottom: "10px" }}>SANTUSH <br />
                        <div style={{ color: "#7c2ed7", marginLeft: "-86px" }}>DEB</div>
                    </h2>
                    <h6 style={{ marginLeft: "80PX" }}>Creative Director - Saint Studious</h6>
                    <h6 style={{
                        textAlign: "initial", fontWeight: "400", marginLeft: "325px",
                        marginRight: "141px", marginBottom: "25px"
                    }}> I'm Santush Deb Nath, a huge HTML lover.
                        A 25-year-old living in a small but doma beautiful country called Bangladesh
                    </h6>
                </div>
            </form >

            <div style={{ marginLeft: "195px" }}>
                <button style={{ backgroundColor: "#7c2ed7", borderColor: "whitesmoke" }} className='buttonstyle'>PORTFOLIO</button>
                <button style={{ backgroundColor: "white", borderWidth: "2px", color: "black", textAlign: "bold" }} className='buttonstyle'>RESUME</button>
            </div>
            {/* <Button variant="white">RESUME</Button>{' '} */}


        </div >
    )
}

export default Rightside