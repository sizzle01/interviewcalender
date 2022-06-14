import React from 'react'
import { NavbarStyles } from './NavbarStyles'

const Navbar = () => {
  const classes = NavbarStyles()
  return <div className={classes.navbar}></div>
}

export default Navbar
