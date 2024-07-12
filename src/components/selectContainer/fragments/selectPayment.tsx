import React from 'react'
import Link, { LinkProps as LinkType } from 'next/link'
import { Check, Circle } from 'lucide-react'

import { cn } from '@/utils/cn'
import { formatValue } from '@/utils/formatMoney'

import { PaymentOptionProps } from '../selectContainer'

type LinkWithoutHref = Omit<LinkType, 'href'>

type LinkProps = LinkWithoutHref & React.HTMLProps<HTMLAnchorElement>

type SelectPaymentProps = React.PropsWithChildren &
  LinkProps & {
    total: number
    isSelected: boolean
    option: PaymentOptionProps
  }

const selectPayment = ({
  option,
  total,
  isSelected,
  children,
  ...props
}: SelectPaymentProps) => {
  return (
    <Link
      {...props}
      href={{
        pathname: '/payment',
        query: {
          step: 1,
          option: JSON.stringify(option),
        },
      }}
      role="radio"
      aria-checked={isSelected}
      className={cn(
        'hover:bg-primary/10 transition-shadow',
        'relative flex flex-col items-start border-b-0 border-t-2 border-x-2 border-border p-5 cursor-pointer w-full',
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
      {children}
      {isSelected ? (
        <div className="absolute bottom-1/2 right-2 flex size-[19px] translate-y-1/2 items-center justify-center rounded-full bg-primary">
          <Check size={12} strokeWidth={3} color="#fff" />
        </div>
      ) : (
        <Circle
          size={21}
          className="absolute bottom-1/2 right-2 translate-y-1/2 text-border"
        />
      )}
    </Link>
  )
}

export default selectPayment
