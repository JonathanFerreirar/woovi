'use client'

import React from 'react'

import { cn } from '@/utils/cn'

import { PaymentOption } from '../../../data'

import BaseSelectContainer from './fragments/container'
import TitleSelectContainer from './fragments/title'

export type PaymentOptionProps = {
  id: number
  value: number
  quantity: number
}

type SelectContainerProps = {
  title: string
  total: number
  paymentData: PaymentOptionProps[]
}

const SelectContainer = ({
  title,
  total,
  paymentData,
}: SelectContainerProps) => {
  const [option, setOption] = React.useState({} as PaymentOptionProps)

  return (
    <div className="relative size-auto">
      <TitleSelectContainer>{title}</TitleSelectContainer>

      {paymentData.map((item, index) => {
        const isFirst = index === 0
        const isSelected = item.id === option.id
        const isLast = PaymentOption.length === index + 1

        return (
          <BaseSelectContainer
            key={index}
            option={item}
            total={total}
            isSelected={isSelected}
            onClick={() => setOption(item)}
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

export default SelectContainer
