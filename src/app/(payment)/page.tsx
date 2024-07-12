import React from 'react'
import Image from 'next/image'

import Logo from '@/../public/Logo.png'
import { LogoBlackAndWhite, SecureShildIcon } from '@/components/icon'
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
        <h1 className="sr-only">Woovi</h1>
        <Image
          src={Logo}
          alt="Logo Woovi"
          className="mx-auto mt-[36px] h-[36px] w-[123px]"
        />

        <h2 className="my-8 text-center text-2xl font-extrabold text-text">
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
        <div className="my-10 flex items-center justify-center gap-1">
          <SecureShildIcon />{' '}
          <p className="font-medium text-textLight">
            {' '}
            Pagamento 100% seguro via:
          </p>{' '}
          <LogoBlackAndWhite />{' '}
        </div>
      </Wrapper>
    </main>
  )
}
export default Home
