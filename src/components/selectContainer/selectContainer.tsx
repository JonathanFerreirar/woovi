'use client'

import React from 'react'

import { cn } from '@/utils/cn'

import { PaymentOption } from '../../../data'

import { SelectPayment } from './fragments/selectPayment'
import { TitlePayment } from './fragments/titlePayment'

export type PaymentOptionProps = {
  id: number
  value: number
  quantity: number
  isBest?: boolean
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
      <TitlePayment>{title}</TitlePayment>

      {paymentData.map((item, index) => {
        const isFirst = index === 0
        const isSelected = item.id === option.id
        const isLast = PaymentOption.length === index + 1

        return !item?.isBest ? (
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
        ) : (
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
          >
            <div className="cliped-bg mt-2 flex w-full items-center justify-start bg-[#133A6F] p-2">
              <p className="text-start text-xs text-white">
                <span className="font-extrabold">-3% de juros:</span> Melhor
                opção de parcelamento
              </p>
            </div>
          </SelectPayment>
        )
      })}
    </div>
  )
}

export default PaymentInstallment
