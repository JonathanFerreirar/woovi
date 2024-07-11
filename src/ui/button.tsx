'use client'

import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const SelectButtonContainer = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  color: '#4D4D4D',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  borderColor: '#03D69D',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

const CustomizedButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <SelectButtonContainer variant="contained" disableRipple>
        Bootstrap
      </SelectButtonContainer>
    </Stack>
  )
}

export default CustomizedButton
