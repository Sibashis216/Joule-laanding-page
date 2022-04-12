import React from 'react'
import { Button } from 'react-bootstrap'
import Blocks from './Blocks'
import Corepara from './Corepara'
import './Thirdpage.css'
// import './Secondpage.css'
function Thirdpage() {
    return (
        <div >
            <div className='corepara'>
                <Corepara />
                <div className='blocks'>
                    <div style={{
                        // border: "2px solid red",
                        left: "414px",
                        width: "365px",
                        height: "272px",
                        top: "0px",
                        position: "absolute",
                        position: "absolute", textAlign: "initial"
                    }}>
                        <img src={'./Joale - Branding & Design Digital Creative Agency PSD dTemplate.jpeg'} />
                        <Blocks heading="Supper Responsive" />

                    </div>
                    <div style={{
                        // border: "2px solid red",
                        left: "414px",
                        width: "365px",
                        height: "272px",
                        top: "285px",
                        position: "absolute",
                        position: "absolute", textAlign: "initial"
                    }}>
                        <img src={'./Joale - Branding & Design Digital Creative Agengcy PSD Template.jpeg'} />

                        <Blocks heading="Lovely Shortcodes" />

                    </div>
                    <div style={{
                        // border: "2px solid red",
                        left: "798px",
                        width: "365px",
                        height: "272px",
                        top: "0px",
                        position: "absolute",
                        position: "absolute", textAlign: "initial"
                    }}>
                        <img src={'./Joale - Branding & Design Digital Creative Agency PSDf Template.jpeg'} />

                        <Blocks heading="Pixel Perfect" />

                    </div>
                    <div style={{
                        // border: "2px solid red",
                        left: "798px",
                        width: "365px",
                        height: "272px",
                        top: "285px",
                        position: "absolute",
                        position: "absolute", textAlign: "initial"
                    }}>
                        <img src={'./Joale - Branding & Design Digital Creativet Agency PSD Template.jpeg'} />

                        <Blocks heading="Creative Design" />

                    </div>
                    <Button variant="contained" className="viewAllFeatures">VIEW ALL FEATURES</Button>
                </div>
            </div>
            <img className="black-image" src={'./Joale - Branding & Design Digital Creative Agency PSD Templateggg.jpeg'}/>
        </div>
    )
}

export default Thirdpage