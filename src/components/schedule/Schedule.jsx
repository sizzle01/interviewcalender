import { ScheduleStyles } from './ScheduleStyle'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { height } from '@mui/system'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Grab Jobs Test',
    allDay: true,
    start: new Date(2022, 5, 2),
    end: new Date(2022, 5, 2),
  },
  {
    title: ' vacation',
    allDay: true,
    start: new Date(2022, 5, 20),
    end: new Date(2022, 5, 20),
  },
  {
    title: ' Grab jobs interview',
    allDay: true,
    start: new Date(2022, 5, 1),
    end: new Date(2022, 5, 1),
  },
]

const Schedule = () => {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' })
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setNewEvent([...allEvents, newEvent])
  }

  const classes = ScheduleStyles()
  return (
    <div className={classes.schedule}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  )
}

export default Schedule
