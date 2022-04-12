import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Fifthpage.css'
function Awards() {
    return (
        <div>
            <Navbar variant="black" >
                <Container>
                    <Navbar.Brand href="#home" style={{ top: "2px", fontWeight: "bolder", color: "black", fontSize: "27px", left: "-2px", position: "absolute" }}>Our Awards & Owners</Navbar.Brand>
                    <Nav className="me-auto"  >
                        {/* <Nav.Link href="#home" style={{ paddingLeft: "64px" }} className="navbarcss">Home </Nav.Link> */}
                        <Nav.Link href="#features" className='mobile-apps'  >Mobile Apps</Nav.Link>
                        <Nav.Link href="#portfolio" style={{  left: "521px", width: "93px", top: "0px", position: "absolute",paddingTop: "10px",color:"black" }}>Branding</Nav.Link>
                        <Nav.Link href="#blog" style={{paddingTop: "10px", left: "618px", width: "137px", top: "0px", position: "absolute",color:"black"}}>Motion Grafics</Nav.Link>
                        <Nav.Link href="#shop" style={{left: "759px", width: "116px", top: "0px", position: "absolute" ,paddingTop: "10px",color:"black"}}>UI/UX Design</Nav.Link>
                        {/* <Nav.Link href="#elements" style={{ paddingLeft: "24px " }} className="navbarcss">Elements</Nav.Link> */}

                    </Nav>
                </Container>
            </Navbar>
            <p className='paraa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit fugi.</p>
        </div>
    )
}

export default Awards