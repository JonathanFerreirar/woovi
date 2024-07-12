'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'

import qrcode from '@/../public/qrcode.png'
import { PaperIcon } from '@/components/icon'
import { PaymentOptionProps } from '@/components/selectContainer'
import CustomizedButton from '@/ui/button'

type StepPixProps = {
  total: string
  option: PaymentOptionProps
}

const StepPix = ({ option, total }: StepPixProps) => {
  const router = useRouter()
  const jsonOption = encodeURI(JSON.stringify(option))
  const [isLoading, setIsLoading] = React.useState(false)

  const processPixPayment = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.replace(`/payment?step=2&option=${jsonOption}&total=${total}`, {
        scroll: true,
      })
      setIsLoading(false)
    }, 1500)
  }

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
        {isLoading && <LoaderCircle className="animate-spin" />}
        {!isLoading && (
          <React.Fragment>
            <span>Clique para copiar QR CODE</span>
            <PaperIcon />
          </React.Fragment>
        )}
      </CustomizedButton>
    </React.Fragment>
  )
}

export default StepPix

/*

 */
