import React from 'react'

import { PixInCash } from '@/components/selectContainer/fragments/PixInCash'
import PaymentInstallment from '@/components/selectContainer/selectContainer'
import Wrapper from '@/components/wrapper/wrapper'

import { PaymentOption } from '../../data'



const Home = () => {
  return (
    <main>
      <Wrapper>
        <h2 className="mb-8 text-center text-2xl font-extrabold text-text">
          João, como você quer pagar?
        </h2>
        <div className="space-y-9">
          <PixInCash />
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
