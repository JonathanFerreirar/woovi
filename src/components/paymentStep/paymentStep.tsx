import React from 'react'
import { Check } from 'lucide-react'

import { Steps } from '@/app/payment/page'
import { cn } from '@/utils/cn'
import { formatValue } from '@/utils/formatMoney'

import { PaymentOptionProps } from '../selectContainer'

import HowWorkAccordion from './fragments/howWorkAccordion'
import { StepForm } from './fragments/stepForm'
import { StepPix } from './fragments/stepPix'

type PaymentStepProps = {
  step: Steps
  total: string
  option: PaymentOptionProps
}

const STEPS = [
  {
    id: 1,
    label: '1º entrada no Pix',
  },
  {
    id: 2,
    label: `2º no Cartão`,
  },
]

const PaymentStep = ({ option, total, step = '1' }: PaymentStepProps) => {
  const numberStep = Number(step)

  const renderStep = () => {
    switch (step) {
      case '1':
        return <StepPix option={option} total={total} />

      case '2':
        return <StepForm option={option} />
    }
  }

  return (
    <React.Fragment>
      {renderStep()}
      <div>
        <p className="text-textLight">Prazo de pagamento</p>
        <span className="font-extrabold text-text">15/12/2021 - 08:17</span>
      </div>
      <div className="w-full">
        {option.quantity > 1 && (
          <div className="w-full space-y-5 py-3">
            {STEPS.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    aria-hidden
                    className={cn(
                      'flex size-[14px]  border items-center justify-center rounded-full',
                      numberStep === item.id && 'bg-white border-primary',
                      numberStep !== item.id && 'bg-white border-border',
                      numberStep === 2 && item.id === 1 && 'bg-primary',
                    )}
                  >
                    {numberStep === 2 && item.id === 1 && (
                      <Check size={12} strokeWidth={3} color="#fff" />
                    )}
                  </div>

                  <p className="text-[18px] font-semibold text-text">
                    {item.label}
                  </p>
                </div>
                <span className="text-[18px] font-extrabold text-text">
                  {formatValue(option.value)}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="border-t-2 border-border py-5">
          <span className="text-sm font-semibold text-text">CET: 0,5%</span>
          <span className="text-[18px] font-extrabold text-text">
            Total: {formatValue(parseFloat(total))}
          </span>
        </div>
        <div className="mb-5 border-y-2 border-border py-3">
          <HowWorkAccordion step={step} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default PaymentStep
