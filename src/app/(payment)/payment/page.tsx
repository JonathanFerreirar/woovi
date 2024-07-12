import PaymentStep from '@/components/paymentStep/paymentStep'
import { PaymentOptionProps } from '@/components/selectContainer'
import Wrapper from '@/components/wrapper/wrapper'
import { formatValue } from '@/utils/formatMoney'

type PaymentProps = {
  searchParams: {
    step: '1' | '2'
    total: string
    option: string
  }
}

const Payment = ({ searchParams }: PaymentProps) => {
  const { option, step, total } = searchParams
  const tratadOption: PaymentOptionProps = JSON.parse(option)

  return (
    <div>
      <Wrapper className="flex flex-col items-center justify-center gap-y-5">
        <h2 className="mx-auto max-w-[283px] text-center text-2xl font-extrabold text-text">
          João, pague a entrada de {formatValue(tratadOption.value)} pelo pix
        </h2>

        <PaymentStep option={tratadOption} step={step} total={total} />
      </Wrapper>
    </div>
  )
}

export default Payment
