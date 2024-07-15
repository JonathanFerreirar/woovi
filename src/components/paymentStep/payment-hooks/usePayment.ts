'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'

import { ClickToCopy } from '@/utils/clickToCopy'

import { StepProps } from '../fragments/stepPix'

type UsePaymentProps = Pick<StepProps, 'option'> & {
  total?: string
}

export const usePayment = ({ option, total }: UsePaymentProps) => {
  const router = useRouter()
  const jsonOption = encodeURI(JSON.stringify(option))
  const [isLoading, setIsLoading] = React.useState(false)
  const isInCash = option.quantity > 1

  const redirectToPaid = () => {
    setCookie({}, 'paid', 'true')
    router.push('/paid?paid=true&name=João')
  }

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
        redirectToPaid()
      }
      setIsLoading(false)
    }, 2500)
  }
  return {
    router,
    isLoading,
    setIsLoading,
    redirectToPaid,
    processPixPayment,
  }
}
