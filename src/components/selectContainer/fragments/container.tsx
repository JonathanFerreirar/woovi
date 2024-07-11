import React from 'react'
import { Check, Circle } from 'lucide-react'

import { cn } from '@/utils/cn'
import { formatValue } from '@/utils/formatMoney'

import { PaymentOptionProps } from '../selectContainer'

type BaseSelectContainerProps = React.ComponentProps<'div'> & {
  option: PaymentOptionProps
  isSelected: boolean
  total: number
}

const BaseSelectContainer = ({
  option,
  total,
  isSelected,
  ...props
}: BaseSelectContainerProps) => {
  return (
    <div
      {...props}
      className={cn(
        'hover:border-primary hover:border-b-2 hover:bg-primary/10',
        'relative flex flex-col items-start border-b-0 border-t-2 border-x-2 border-border p-5 cursor-pointer',
        props.className,
      )}
    >
      <div className="flex items-center justify-start">
        <span
          className="text-xl font-bold text-text"
          aria-label="quantidade de percelas"
        >
          {option.quantity}x
        </span>
        <span
          className="text-xl font-normal text-text"
          aria-label="valor das parcelas"
        >
          {' '}
          {formatValue(option.value)}
        </span>
      </div>
      <div className="flex items-center justify-start gap-1">
        <span className="font-light text-textLight">Total:</span>
        <span
          aria-label="valor total do produto"
          className="font-light text-textLight"
        >
          {formatValue(total)}
        </span>
      </div>

      {isSelected ? (
        <div className="absolute bottom-1/2 right-2 flex size-[19px] translate-y-1/2 items-center justify-center rounded-full bg-primary">
          <Check size={12} strokeWidth={3} color="#fff" />
        </div>
      ) : (
        <Circle
          size={26}
          className="absolute bottom-1/2 right-2 translate-y-1/2 text-border"
        />
      )}
    </div>
  )
}

export default BaseSelectContainer
