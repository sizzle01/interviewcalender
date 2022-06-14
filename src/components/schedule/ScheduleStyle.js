import { makeStyles } from '@mui/styles'

export const ScheduleStyles = makeStyles({
  schedule: {
    margin: '20px',
    width: '70vw',
    backgroundColor: '#Ffffff',
  },

  //   Media queries
  '@media (max-width: 800px)': {
    calenderMenu: {
      width: '90vw',
    },
  },
})
