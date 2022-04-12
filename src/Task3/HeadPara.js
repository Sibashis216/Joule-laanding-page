import React from 'react'
import Paragraph from './Paragraph'
// import './Firstpage.css'
import './Secondpage.css'
import { Button } from 'react-bootstrap'
function HeadPara() {
    return (
        <div className='heading'>
            <h1>UI/UX Design --<br /> We Are An Awesome Agency.</h1>
            <div className='paragraph'>
                <Paragraph />
                <Paragraph />
                <Paragraph />
            </div>
            <Button variant="contained" id="read-more">LEARN MORE</Button>

        </div>
    )
}

export default HeadPara