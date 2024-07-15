'use client'

import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { cn } from '@/utils/cn'

const SelectButtonContainer = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: 8,
  padding: '6px 12px',
  backgroundColor: '#133A6F',
  color: '#fff',
  border: 'none',

  '&:hover': {
    boxShadow: 'none',
    borderColor: '#none',
    backgroundColor: '#0e3264',
  },
  '&:active': {
    boxShadow: 'none',
    borderColor: '#none',
    backgroundColor: '#133A6F',
  },
  '&:focus': {
    boxShadow: 'none',
  },
})

export type CustomizedButtonProps = React.PropsWithChildren &
  React.ComponentProps<typeof SelectButtonContainer> & {
    className?: string
    isLoading?: boolean
  }

const CustomizedButton = ({
  children,
  className,

  ...props
}: CustomizedButtonProps) => {
  return (
    <Stack spacing={2} direction="row">
      <SelectButtonContainer
        {...props}
        variant="contained"
        className={cn(className)}
      >
        {children}
      </SelectButtonContainer>
    </Stack>
  )
}

export default CustomizedButton
