import React from 'react'
import Image from 'next/image'

import Logo from '@/../public/Logo.png'
import SelectContainer from '@/components/selectContainer/selectContainer'
import Wrapper from '@/components/wrapper/wrapper'

import { PaymentOption } from '../../data'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  return (
    <main className="">
      <Wrapper>
        <h1 className="sr-only">Woovi</h1>
        <Image
          src={Logo}
          alt="Logo Woovi"
          className="mx-auto mt-[36px] h-[36px] w-[123px]"
        />

        <h2 className="my-8 text-center text-2xl font-extrabold text-text">
          João, como você quer pagar?
        </h2>
        <SelectContainer
          total={30000}
          title="Pix Parcelado"
          paymentData={PaymentOption}
        />
      </Wrapper>
    </main>
  )
}
export default Home
