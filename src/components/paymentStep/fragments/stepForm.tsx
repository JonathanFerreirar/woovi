'use client'

import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { paymentAction } from '@/action/payment'
import { formCardSchema } from '@/types/forms'
import CustomizedButton from '@/ui/button'
import ErrorMessager from '@/ui/errorMessage'
import CustomizedInput from '@/ui/input'
import SelectTextFields from '@/ui/select'
import { CARD_EXP_MASK, CARDMASK, CPFMASK } from '@/utils/mask'

import { useFormartOptions } from '../payment-hooks/useFormartOptions'

import { StepProps } from './stepPix'

export type StepFormProps = Omit<StepProps, 'total'>

type FormCardType = z.infer<typeof formCardSchema>

export const StepForm = ({ option }: StepFormProps) => {
  const { options } = useFormartOptions({ option })
  const [isLoading, setIsloading] = React.useState(false)

  const defaultValue = options[0]?.value

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCardType>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formCardSchema),
  })

  const onSubmit: SubmitHandler<FormCardType> = () => {
    setIsloading(true)

    setTimeout(async () => {
      setIsloading(false)
      await paymentAction()
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur } }) => (
          <CustomizedInput
            onBlur={onBlur}
            onChange={onChange}
            label="Nome Completo"
            error={!!errors?.name}
            placeholder="João Linaldo Dias Fraga Santos"
          />
        )}
      />

      {errors?.name && (
        <ErrorMessager className="text-red-600">
          {errors.name.message}
        </ErrorMessager>
      )}
      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, onBlur } }) => (
          <MaskedInput
            guide={false}
            mask={CPFMASK}
            onBlur={onBlur}
            onChange={onChange}
            placeholder="000.000.000-00"
            render={(ref, props) => (
              <CustomizedInput
                inputRef={ref}
                {...props}
                label="CPF"
                error={!!errors?.cpf}
              />
            )}
          />
        )}
      />
      {errors?.cpf && <ErrorMessager>{errors.cpf.message}</ErrorMessager>}
      <Controller
        control={control}
        name="cardNumber"
        render={({ field: { onChange, onBlur } }) => (
          <MaskedInput
            guide={false}
            onBlur={onBlur}
            mask={CARDMASK}
            onChange={onChange}
            placeholder="0000 0000 0000 0000"
            render={(ref, props) => (
              <CustomizedInput
                inputRef={ref}
                {...props}
                label="Número do cartão"
                error={!!errors?.cardNumber}
              />
            )}
          />
        )}
      />
      {errors?.cardNumber && (
        <ErrorMessager>{errors.cardNumber.message}</ErrorMessager>
      )}
      <div className="flex items-center gap-2">
        <div className="flex w-full flex-col items-start gap-1">
          <Controller
            control={control}
            name="expiration"
            render={({ field: { onChange, onBlur } }) => (
              <MaskedInput
                guide={false}
                onBlur={onBlur}
                onChange={onChange}
                mask={CARD_EXP_MASK}
                placeholder="00/00"
                render={(ref, props) => (
                  <CustomizedInput
                    inputRef={ref}
                    {...props}
                    label="Vencimento"
                    error={!!errors?.expiration}
                  />
                )}
              />
            )}
          />
          {errors?.expiration && (
            <ErrorMessager>{errors.expiration.message}</ErrorMessager>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <Controller
            control={control}
            name="cvc"
            render={({ field: { onChange, onBlur } }) => (
              <CustomizedInput
                onBlur={onBlur}
                onChange={onChange}
                placeholder="123"
                label="CVC"
                error={!!errors?.cvc}
              />
            )}
          />
          {errors?.cvc && <ErrorMessager>{errors.cvc.message}</ErrorMessager>}
        </div>
      </div>
      {defaultValue && (
        <SelectTextFields
          label="Parcelas"
          options={options}
          defaultValue={defaultValue}
        />
      )}

      <CustomizedButton className="w-full" type="submit" isLoading={isLoading}>
        Pagar
      </CustomizedButton>
    </form>
  )
}
