'use client'

import { styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import { cn } from '@/utils/cn'

const CustomInput = styled(TextField)<TextFieldProps>(() => ({
  width: '100%',
  color: '#4D4D4D',
  '& .MuiInputBase-input': {
    color: '#4D4D4D',
  },
  '& .MuiInputLabel-root': {
    color: '#4D4D4D',
    fontWeight: '500',
  },
}))

type CustomizedInputProps = TextFieldProps & {
  className?: string
}

const CustomizedInput = ({ className, ...props }: CustomizedInputProps) => {
  return (
    <CustomInput
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      className={cn(className)}
    />
  )
}

export default CustomizedInput
