'use client'

import React from 'react'
import Image from 'next/image'
import { LoaderCircle } from 'lucide-react'

import qrcode from '@/../public/qrcode.png'
import { PaperIcon } from '@/components/icon'
import { PaymentOptionProps } from '@/components/selectContainer'
import CustomizedButton from '@/ui/button'

import { usePayment } from '../payment-hooks/usePayment'

export type StepProps = {
  total: string
  option: PaymentOptionProps
}

export const StepPix = ({ option, total }: StepProps) => {
  const { processPixPayment, isLoading } = usePayment({ option, total })

  return (
    <React.Fragment>
      <Image
        src={qrcode}
        alt="Qrcode para pagamento"
        className="mx-auto w-[300px] rounded-[10px] border-2 border-primary p-2"
      />

      <CustomizedButton
        onClick={processPixPayment}
        className="flex min-w-[250px] items-center gap-2"
      >
        {isLoading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <React.Fragment>
            <span>Clique para copiar QR CODE</span>
            <PaperIcon />
          </React.Fragment>
        )}
      </CustomizedButton>
    </React.Fragment>
  )
}
