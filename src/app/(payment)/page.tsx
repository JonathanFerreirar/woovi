import React from 'react'

import PaymentInstallment from '@/components/selectContainer/selectContainer'
import Wrapper from '@/components/wrapper/wrapper'

import { PaymentOption } from '../../../data'

import PixInCashOption from './_component/PixInCashOption'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  return (
    <main className="">
      <Wrapper>
        <h2 className="mb-8 text-center text-2xl font-extrabold text-text">
          João, como você quer pagar?
        </h2>
        <div className="space-y-9">
          <PixInCashOption />
          <PaymentInstallment
            total={30000}
            title="Pix Parcelado"
            paymentData={PaymentOption}
          />
        </div>
      </Wrapper>
    </main>
  )
}
export default Home
