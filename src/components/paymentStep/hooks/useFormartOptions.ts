'use client'

import React from 'react'

import { SelectBaseProps } from '@/ui/select'

import { StepFormProps } from '../fragments/stepForm'

export const useFormartOptions = ({ option }: StepFormProps) => {
  const [options, setOptions] = React.useState<SelectBaseProps[]>([])

  React.useEffect(() => {
    const newOptions: SelectBaseProps[] = Array.from({
      length: option.quantity,
    }).map((_, index) => ({
      label: `${index + 1}x de R$ ${option.value.toFixed(2)}`,
      value: `${index + 1}-${option.value.toFixed(2)}`,
    }))

    setOptions(newOptions)
  }, [option.quantity, option.value])

  return {
    options,
  }
}
