import { redirect } from 'next/navigation'

import PaymentStep from '@/components/paymentStep/paymentStep'
import { PaymentOptionProps } from '@/components/selectContainer'
import Wrapper from '@/components/wrapper/wrapper'
import { formatValue } from '@/utils/formatMoney'

export type Steps = '1' | '2'

type PaymentProps = {
  searchParams: {
    step: Steps
    total: string
    option: string
  }
}

const Payment = ({ searchParams }: PaymentProps) => {
  const { option, step, total } = searchParams

  if (!['1', '2'].includes(step)) {
    redirect('/')
  }

  const tratadOption: PaymentOptionProps = JSON.parse(option)

  const isFirstStep = step === '1'
  const hasInstallment = tratadOption.quantity > 1

  return (
    <div>
      <Wrapper className="flex flex-col items-center justify-center gap-y-5">
        {isFirstStep && hasInstallment && (
          <h2 className="mx-auto max-w-[283px] text-center text-2xl font-extrabold text-text">
            João, pague a entrada de {formatValue(tratadOption.value)} pelo pix
          </h2>
        )}
        {isFirstStep && !hasInstallment && (
          <h2 className="mx-auto max-w-[483px] text-center text-2xl font-extrabold text-text">
            Ficamos felizes pela preferência, pague o valor abaixo de{' '}
            {formatValue(tratadOption.value)} pelo pix
          </h2>
        )}

        {!isFirstStep && hasInstallment && (
          <h2 className="mx-auto max-w-[483px] text-center text-2xl font-extrabold text-text">
            João, pague o restante em {tratadOption.quantity}x no cartão
          </h2>
        )}

        <PaymentStep option={tratadOption} step={step} total={total} />
      </Wrapper>
    </div>
  )
}

export default Payment
