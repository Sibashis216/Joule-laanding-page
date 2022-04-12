import React from 'react'
import './Profile.css'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EventNoteIcon from '@mui/icons-material/EventNote';
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const label1 = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Profile() {
    return (
        <div>

            <div className="clearfix" >
   <div style={{width:"30px",height:"30px", backgroundColor:"red"}}></div>
                <div className='box' >

                    <div>

                        <div className="container">
                            <div className="round">
                                <input type="checkbox" checked id="checkbox" />
                                <label for="checkbox"></label>
                            </div>
                        </div>

                        <div className='checkbox'>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </div>
                        {/* <div className='photo'> */}
                        <Stack direction="row" className='photo' spacing={2}>
                            <Avatar alt="Remy Sharp" src='./images.jpg' />
                        </Stack>
                        {/* </div> */}
                        <button className='assign'>
                            <EventNoteIcon style={{
                                display: "inline-block",
                                marginRight: "10px"
                            }} />Assign</button>
                        <button className='view'>
                            <RemoveRedEyeIcon style={{
                                display: "inline-block",
                                marginRight: "10px"
                            }} />View
                        </button>
                    </div>
                </div>
                <div className="box" >
                    <div>
                        <div className="container">
                            <div className="round">
                                <input type="checkbox" checked id="checkbox" />
                                <label for="checkbox"></label>
                            </div>
                        </div>
                        <div className='checkbox'>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </div>
                        <Stack direction="row" className='photo' spacing={2}>
                            <Avatar alt="Remy Sharp" src='./images.jpg' />

                        </Stack>
                        <button className='assign'>
                            <EventNoteIcon style={{
                                display: "inline-block",
                                marginRight: "10px"
                            }} />Assign</button>
                        <button className='view'><RemoveRedEyeIcon style={{
                            display: "inline-block",
                            marginRight: "10px"
                        }} />View</button>
                    </div>
                    {/* <button>Assign</button> */}
                </div>
                <div className="box" >
                    <div>
                        <div className="container">
                            <div className="round">
                                <input type="checkbox" checked id="checkbox" />
                                <label for="checkbox"></label>
                            </div>
                        </div>
                        <div className='checkbox'>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </div>
                        <Stack direction="row" className='photo' spacing={2}>
                            <Avatar alt="Remy Sharp" src='./images.jpg' />

                        </Stack>
                        <button className='assign'>
                            <EventNoteIcon style={{
                                display: "inline-block",
                                marginRight: "10px"
                            }} />Assign</button>
                        <button className='view'>

                            <RemoveRedEyeIcon style={{
                                display: "inline-block",
                                marginRight: "10px"
                            }} />View</button>
                    </div>
                    {/* <button>Assign</button> */}
                </div>
                <div className="box" >
                    <div>
                        <div className="container">
                            <div className="round">
                                <input type="checkbox" checked id="checkbox" />
                                <label for="checkbox"></label>
                            </div>
                        </div>
                        <div className='checkbox'>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </div>
                        <Stack direction="row" className='photo' spacing={2}>
                            <Avatar alt="Remy Sharp" src='./images.jpg' />

                        </Stack>
                        <button className='assign'>
                            <EventNoteIcon style={{
                                display: "inline-block",
                                marginRight: "10px"
                            }} />Assign</button>
                        <button className='view'><RemoveRedEyeIcon style={{
                            display: "inline-block",
                            marginRight: "10px"
                        }} />View</button>
                    </div>
                    {/* <button>Assign</button> */}
                </div>
            </div >
        </div>

    )
}

export default Profile