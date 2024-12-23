import { Alert } from '@mui/material'
import React from 'react'

const WarningAlert=({message})=> {

  return (
    <div className='w-full h-full'>
      <Alert severity="warning">{message}</Alert>
    </div>
  )
}

export default WarningAlert
