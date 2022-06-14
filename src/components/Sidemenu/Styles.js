import { makeStyles } from '@mui/styles'

export const styles = makeStyles({
  sideMenu: {
    width: '15vw',
    height: '100vh ',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontSize: '40px',
    fontWeight: '700',
    margin: '10px',
    color: '#FF3333',
  },

  menuItems: {
    marginTop: '12vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  menuItem: {
    marginBottom: '15px',
    padding: '7px 0px',
    transition: 'backgroundColor 2s',
    '&:hover': {
      borderLeft: '6px solid #FF3333',
      backgroundColor: '#FFE5E5',
    },
  },
  menuIcon: {
    color: '#5C5C5C',
    marginLeft: '35%',
    width: '100%',
    marginBottom: '20px',
    '&:hover': {
      color: '#FF3333',
    },
  },
  // media queries
  '@media (max-width: 800px)': {
    calenderMenu: {
      width: '50vw',
    },
    logo: {
      marginLeft: '15px',
    },
  },
})
