import React from 'react'
import { CalenderMenuStyles } from './CalenderMenuStyles'
import Button from '@mui/material/Button'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import SelectOption from '../SelectOption'
import Checkbox from '@mui/material/Checkbox'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined'
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined'

const CalenderMenu = () => {
  const classes = CalenderMenuStyles()
  return (
    <div className={classes.calenderMenu}>
      <div className={classes.calenderControls}>
        <Button
          className={classes.create}
          variant="text"
          startIcon={<AddCircleOutlineOutlinedIcon />}
          endIcon={<ArrowDropDownOutlinedIcon />}
        >
          Create
        </Button>
        <div className={classes.calenders}>
          <Button
            className={classes.calendersBtn}
            endIcon={<ArrowDropDownOutlinedIcon />}
            variant="text"
          >
            Calenders
          </Button>
          <div className={classes.calendersControl}>
            <SelectOption
              control={<Checkbox defaultChecked />}
              color="secondary"
              label="Admin's calender"
            />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        {/* Interviw status */}
        <div className={classes.interviewStatus}>
          <Button
            className={classes.interviewStatusBtn}
            endIcon={<ArrowDropDownOutlinedIcon />}
            variant="text"
          >
            Interview Status
          </Button>
          <SelectOption control={<Checkbox />} label="All" />
          <SelectOption
            control={<Checkbox defaultChecked />}
            label={
              <div className={classes.pendingStatusLabel}>
                <div className={classes.pendingLabel}></div>Confirmed (c)
              </div>
            }
            color="darker"
          />
          <SelectOption
            control={<Checkbox defaultChecked />}
            label={
              <div className={classes.confirmedStatusLabel}>
                <div className={classes.confirmedLabel}></div>Pending (p)
              </div>
            }
          />
          <SelectOption
            control={<Checkbox />}
            label={
              <div className={classes.rescheduleStatusLabel}>
                <div className={classes.rescheduleLabel}></div>Reschedule (R)
              </div>
            }
          />

          <SelectOption
            control={<Checkbox defaultChecked />}
            label={
              <div className={classes.availableStatusLabel}>
                <div className={classes.availableLabel}></div>Available (A)
              </div>
            }
          />
        </div>
        {/* Interview type */}
        <div className={classes.interviewType}>
          <Button
            className={classes.interviewTypeBtn}
            endIcon={<ArrowDropDownOutlinedIcon />}
            variant="text"
          >
            Interview Type
          </Button>
          <div className={classes.interviewTypeControls}>
            <SelectOption control={<Checkbox defaultChecked />} label="All" />
          </div>
          <SelectOption
            control={<Checkbox defaultChecked />}
            label={
              <div className={classes.interviewPersonLabel}>
                <div className={classes.personLabel}>
                  <PersonOutlineOutlinedIcon />
                </div>
                In Person
              </div>
            }
          />
          <SelectOption
            control={<Checkbox defaultChecked />}
            label={
              <div className={classes.interviewPersonLabel}>
                <div className={classes.personLabel}>
                  <PhoneAndroidOutlinedIcon />
                </div>
                Phone
              </div>
            }
          />
          <SelectOption
            control={<Checkbox defaultChecked />}
            label={
              <div className={classes.interviewPersonLabel}>
                <div className={classes.personLabel}>
                  <ComputerOutlinedIcon />
                </div>
                Phone
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default CalenderMenu
