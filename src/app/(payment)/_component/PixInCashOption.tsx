'use client'

import React from 'react'

import SelectPayment from '@/components/selectContainer/fragments/selectPayment'
import TitleSelect from '@/components/selectContainer/fragments/titlePayment'
import { cn } from '@/utils/cn'

const PixInCashOption = () => {
  const [isSelected, setIsSelected] = React.useState(false)

  return (
    <div className="relative size-auto">
      <TitleSelect>PIX </TitleSelect>
      <SelectPayment
        option={{
          id: 0,
          quantity: 1,
          value: 30500.0,
        }}
        total={30500.0}
        isSelected={isSelected}
        onClick={() => setIsSelected(true)}
        className={cn(
          'focus:border-primary focus:border-b-2 border-b-2 rounded-[10px] focus:bg-primary/10',
        )}
      >
        <React.Fragment>
          <p className="font-medium text-primary">
            Ganhe <span className="font-semibold">3%</span> de Cashback
          </p>
          <div className="cliped-bg flex w-full items-center justify-start bg-[#133A6F] p-2">
            <p className="text-start text-xs text-white">
              🤑 <span className="font-extrabold">R$ 300,00</span> de volta no
              seu Pix na hora
            </p>
          </div>
        </React.Fragment>
      </SelectPayment>
    </div>
  )
}

export default PixInCashOption
