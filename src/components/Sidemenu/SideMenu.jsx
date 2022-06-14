import React from 'react'
import { styles } from './Styles'
import { icons } from '../../Data'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
  const classes = styles()
  return (
    <div className={classes.sideMenu}>
      <div className={classes.logo}>G</div>

      <div className={classes.menuItems}>
        {icons.map((item, index) => {
          return (
            <div className={classes.menuItem}>
              <NavLink key={index} className={classes.menuIcon} to="/">
                {item.icon}
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideMenu
