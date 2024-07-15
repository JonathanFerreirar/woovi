'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import qrcode from '@/../public/qrcode.png'
import { paymentAction } from '@/action/payment'
import { PaperIcon } from '@/components/icon'
import { PaymentOptionProps } from '@/components/selectContainer'
import CustomizedButton from '@/ui/button'
import { ClickToCopy } from '@/utils/clickToCopy'

export type StepProps = {
  total: string
  option: PaymentOptionProps
}

export const StepPix = ({ option, total }: StepProps) => {
  const router = useRouter()
  const jsonOption = encodeURI(JSON.stringify(option))
  const [isLoading, setIsLoading] = React.useState(false)
  const isInCash = option.quantity > 1

  const processPixPayment = async () => {
    setIsLoading(true)
    await ClickToCopy({
      contentToCopy: 'https://github.com/JonathanFerreirar',
    })
    setTimeout(async () => {
      if (isInCash) {
        router.replace(`/payment?step=2&option=${jsonOption}&total=${total}`, {
          scroll: true,
        })
      } else {
        await paymentAction()
      }
      setIsLoading(false)
    }, 2500)
  }

  return (
    <React.Fragment>
      <Image
        src={qrcode}
        alt="Qrcode para pagamento"
        className="mx-auto w-[300px] rounded-[10px] border-2 border-primary p-2"
      />

      <CustomizedButton
        isLoading={isLoading}
        onClick={processPixPayment}
        className="flex min-w-[250px] items-center gap-2"
      >
        <span>Clique para copiar QR CODE</span>
        <PaperIcon />
      </CustomizedButton>
    </React.Fragment>
  )
}
