import React from 'react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { CircleCheck } from 'lucide-react'

import Wrapper from '@/components/wrapper/wrapper'

const Paid = ({
  searchParams,
}: {
  searchParams: { paid: string; name: string }
}) => {
  const { paid, name } = searchParams
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('paid')

  if (!hasCookie || !paid) {
    redirect('/')
  }

  return (
    <Wrapper>
      <div className="p-6  md:mx-auto">
        <CircleCheck className="mx-auto fill-primary text-white" size={100} />
        <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
          Pagamento realizado com sucesso!
        </h3>
        <div className="mt-5 text-center">
          <p className="my-2 text-gray-600">Olá {name},</p>
          <p>
            Seu pedido foi recebido e está sendo processado. Se você tiver
            qualquer dúvida ou precisar de assistência, não hesite em entrar em
            contato conosco. Estamos aqui para ajudar!
          </p>

          <div className="py-10 text-center">
            <Link href="/">Voltar ao inicio</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Paid
