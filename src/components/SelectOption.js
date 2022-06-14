import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'

const SelectOption = ({ label, control, onChange, color }) => {
  return (
    <div>
      <FormControlLabel
        control={control}
        label={label}
        onChange={onChange}
        color={color}
      />
    </div>
  )
}

export default SelectOption
