import React, { useState } from 'react'
import { ButtonGroup, Container, Nav, Navbar, ToggleButton } from 'react-bootstrap'
import './Firstpage.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Button } from '@mui/material';
// import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
function Firstpage(props) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    // { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    // { name: 'Radio', value: '3' },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div style={{color:"#d1eefb"}}>
      <Navbar bg="#d1eefb" variant="blue" style={{ backgroundColor: "#d1eefb" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ marginLeft: "220px", fontWeight: "bolder", color: "black",fontSize: "27px" }}>Joale</Navbar.Brand>
          <Nav className="me-auto"  >
            <Nav.Link href="#home" style={{ paddingLeft: "64px" }} className="navbarcss">Home </Nav.Link>
            <Nav.Link href="#features" style={{ paddingLeft: "25px " }} className="navbarcss">Pages</Nav.Link>
            <Nav.Link href="#portfolio" style={{ paddingLeft: "27px " }} className="navbarcss">Portfolio</Nav.Link>
            <Nav.Link href="#blog" style={{ paddingLeft: "32px " }} className="navbarcss">Blog</Nav.Link>
            <Nav.Link href="#shop" style={{ paddingLeft: "29px " }} className="navbarcss">Shop</Nav.Link>
            <Nav.Link href="#elements" style={{ paddingLeft: "24px " }} className="navbarcss">Elements</Nav.Link>
            <ShoppingCartIcon style={{ marginLeft: "24px ", marginTop: "4PX" }} />
            <SearchIcon style={{ marginLeft: "24px ", marginTop: "4PX" }} />
            <WidgetsIcon style={{ marginLeft: "24px ", marginTop: "4PX" }} />
          </Nav>
        </Container>
      </Navbar>




      {/* style={{ width: "20px", border: "2px solid red", height: "20px" }} */}
      <div className='hii'>
        <button className='slider' ><b> {props.slideleft}</b></button>
        <h1 style={{ color: "black" }} className="hello">Think Simple Design Simple
          <h5 style={{ marginTop: "61px" }}> Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Enim reprehenderit fugit quaerat </h5>
          <Button variant="contained" id="read-more">READ MORE</Button>
        </h1>
        <button className='sliderright' ><b> {props.slideright}</b></button>
        <MobileStepper className='CAROUSAL'
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
    />
      </div>
    </div>
  )
}

export default Firstpage