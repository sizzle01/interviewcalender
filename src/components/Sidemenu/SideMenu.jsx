import React from 'react'
import { styles } from './Styles'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined'
import { NavLink } from 'react-router-dom'

const icons = [
  {
    icon: <HomeOutlinedIcon />,
    link: '/',
  },
  {
    icon: <BusinessCenterOutlinedIcon />,
    link: '/',
  },
  {
    icon: <ContactsOutlinedIcon />,
    link: '/',
  },
  {
    icon: <ForumOutlinedIcon />,
    link: '/',
  },
  {
    icon: <DateRangeOutlinedIcon />,
    link: '/',
  },
  {
    icon: <InsertChartOutlinedOutlinedIcon />,
    link: '/',
  },
]

const SideMenu = () => {
  const classes = styles()
  return (
    <div className={classes.sideMenu}>
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
