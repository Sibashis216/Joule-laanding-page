import React from 'react'
import DotsMobileStepper from './Duplicate'
import Firstpage from './Firstpage'
import ForthPage from './FOURTH PAGE/ForthPage'
import Secondpage from './Secondpage'
import './Secondpage.css'
import Thirdpage from './Thirdpage'
import './FOURTH PAGE/fourthPage.css'
import './Thirdpage.css'
import Fifthpage from './FIFTH PAGE/Fifthpage'
import Sixthpage from './SIXTH PAGE/Sixthpage'
import './SEVENTH PAGE/Seventhpage.css'
import './SIXTH PAGE/Sixthpage.css'
import SeventhPage from './SEVENTH PAGE/SeventhPage'

function TaskApp() {
  return (

    <div >
      <Firstpage slideleft="<" slideright=">" />

      <div className='secondpage'>
        <Secondpage />
      </div>

      <div className='thirdpage'>
        <Thirdpage />
      </div>

      <div className='fourthPage'>
          <ForthPage />
      </div>
      <div className='fifthpage'>
        <Fifthpage/>
      </div>
      <div className='sixthpage'> 
        <Sixthpage/>
      </div>
      <div className='seventhpage'>
        <SeventhPage/>
      </div>
      {/* <DotsMobileStepper/> */}
    </div>

  )
}

export default TaskApp