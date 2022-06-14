import { makeStyles } from '@mui/styles'

export const ContentStyles = makeStyles({
  content: {
    display: 'flex',
    backgroundColor: '#FFF6F6',
    width: '90vw',
  },
  // Media queries
  '@media (max-width: 800px)': {
    calenderMenu: {
      width: '90vw',
    },
  },
})
