import React from 'react'
import Grid, { makeStyles } from '@mui/material'
import SpacingGrid from './Grrdmaterialui'
import BoxSx from './Grrdmaterialui'
import './Task.css'

const useStyles= makeStyles({
 hello:{
   marginleft: "3px"

 }
 
})
function Gridd() {
  const classes  = useStyles()
  return (
    <div>
      <BoxSx />
      <BoxSx className={classes.hello}/>
      <BoxSx/>
      <BoxSx/>
        
    </div>
  )
}

export default Gridd