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
  '&:hover .MuiInputLabel-root': {
    color: '#03D69D',
  },
  '& .MuiInput-underline:before': {
    borderColor: '#03D69D',
  },
  '& .MuiInput-underline:hover:before': {
    borderColor: '#03D69D',
  },
  '& .MuiInput-underline:after': {
    borderColor: '#03D69D',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#03D69D',
  },
}))

type CustomizedInputProps = TextFieldProps & {
  className?: string
}

const CustomizedInput = ({ className, ...props }: CustomizedInputProps) => {
  return <CustomInput {...props} className={cn(className)} />
}

export default CustomizedInput
