import React from 'react'
import CalenderMenu from '../calenderMenu/CalenderMenu'
import Navbar from '../navbar/Navbar'
import Schedule from '../schedule/Schedule'
import { ContentStyles } from './ContentStyles'

const Content = () => {
  const classes = ContentStyles()
  return (
    <div>
      <Navbar />
      <div className={classes.content}>
        <CalenderMenu />
        <Schedule />
      </div>
    </div>
  )
}

export default Content
