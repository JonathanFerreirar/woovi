'use client'

import Box from '@mui/material/Box'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { TextFieldProps } from '@mui/material/TextField'

import CustomizedInput from './input'

const CustomMenuItem = styled(MenuItem)<MenuItemProps>(() => ({
  width: '100%',
  color: '#4D4D4D',
  '& .MuiInputBase-input': {
    color: '#4D4D4D',
  },

  '& .MuiInput-underline:before': {
    borderBottomColor: '#03D69D',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: '#03D69D',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#03D69D',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#03D69D',
  },
}))

export type SelectBaseProps = { value: string; label: string }

type SelectTextFieldsProps = TextFieldProps & {
  options: SelectBaseProps[]
}

const SelectTextFields = ({ options, ...props }: SelectTextFieldsProps) => {
  return (
    <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
      }}
    >
      <div>
        <CustomizedInput {...props} select>
          {options.map((option) => (
            <CustomMenuItem disabled key={option.value} value={option.value}>
              {option.label}
            </CustomMenuItem>
          ))}
        </CustomizedInput>
      </div>
    </Box>
  )
}

export default SelectTextFields
