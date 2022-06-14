import { makeStyles } from '@mui/styles'

export const CalenderMenuStyles = makeStyles({
  calenderMenu: {
    margin: '20px',
    padding: '10px',
    marginLeft: '40px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  calenderControls: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  create: {
    width: '150px',
    marginBottom: '100px',
    '&.MuiButton-root': {
      fontWeight: 600,
      color: '#121212',
      backgroundColor: '#a454f0',
      borderRadius: '20px',
      textTransform: 'lowercase',
    },
  },
  calenders: {
    margin: '40px 0px 30px 0px',
  },
  calendersBtn: {
    '&.MuiButton-root': {
      color: '#121212',
    },
  },
  calendersControl: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interviewStatusBtn: {
    '&.MuiButton-root': {
      color: '#121212',
    },
  },
  pendingStatusLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  pendingLabel: {
    height: '10px',
    width: '10px',
    backgroundColor: 'green',
    marginRight: '7px',
    borderRadius: '50%',
  },
  confirmedStatusLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  confirmedLabel: {
    height: '10px',
    width: '10px',
    backgroundColor: 'yellow',
    marginRight: '7px',
    borderRadius: '50%',
  },
  rescheduleStatusLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  rescheduleLabel: {
    height: '10px',
    width: '10px',
    backgroundColor: 'blue',
    marginRight: '7px',
    borderRadius: '50%',
  },
  availableStatusLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  availableLabel: {
    height: '10px',
    width: '10px',
    backgroundColor: 'purple',
    marginRight: '7px',
    borderRadius: '50%',
  },
  interviewType: {
    marginTop: '15px',
  },
  interviewTypeBtn: {
    '&.MuiButton-root': {
      color: '#121212',
    },
  },
  interviewPersonLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  personLabel: {
    marginRight: '7px',
    fontSize: '5px',
  },
})
