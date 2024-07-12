'use client'

import CustomizedInput from '@/ui/input'
import SelectTextFields from '@/ui/select'

import { useFormartOptions } from '../hooks/useFormartOptions'

import { StepProps } from './stepPix'

export type StepFormProps = Omit<StepProps, 'total'>

const StepForm = ({ option }: StepFormProps) => {
  const { options } = useFormartOptions({ option })

  const defaultValue = options[0]?.value

  return (
    <div className="w-full space-y-6">
      <CustomizedInput
        label="Nome Completo"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <CustomizedInput
        label="CPF"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <CustomizedInput
        label="Número do cartão"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div className="flex items-center gap-2">
        <CustomizedInput
          label="Vencimento"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <CustomizedInput
          label="CVV"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      {defaultValue && (
        <SelectTextFields
          label="Parcelas"
          options={options}
          defaultValue={defaultValue}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    </div>
  )
}

export default StepForm
