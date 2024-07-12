'use client'

import React from 'react'

import { cn } from '@/utils/cn'

import { PaymentOption } from '../../../data'

import SelectPayment from './fragments/selectPayment'
import TitleSelect from './fragments/titlePayment'

export type PaymentOptionProps = {
  id: number
  value: number
  quantity: number
}

type PaymentInstallmentProps = {
  title: string
  total: number
  paymentData: PaymentOptionProps[]
}

const PaymentInstallment = ({
  title,
  total,
  paymentData,
}: PaymentInstallmentProps) => {
  const [option, setOption] = React.useState({} as PaymentOptionProps)

  return (
    <div className="relative size-auto">
      <TitleSelect>{title}</TitleSelect>

      {paymentData.map((item, index) => {
        const isFirst = index === 0
        const isSelected = item.id === option.id
        const isLast = PaymentOption.length === index + 1

        return (
          <SelectPayment
            key={index}
            option={item}
            total={total}
            isSelected={isSelected}
            onClick={() => setOption(item)}
            id={isSelected ? 'selected' : undefined}
            className={cn(
              isFirst && 'rounded-t-lg',
              isLast && 'border-b-2 rounded-b-lg',
              isSelected && 'border-primary border-b-2 bg-primary/10',
            )}
          />
        )
      })}
    </div>
  )
}

export default PaymentInstallment
