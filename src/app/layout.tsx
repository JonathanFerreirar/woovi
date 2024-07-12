import './globals.css'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/../public/Logo.png'
import { LogoBlackAndWhite, SecureShildIcon } from '@/components/icon'

import { nunito } from './font'

export const metadata: Metadata = {
  title: 'Woovi',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="pt">
      <body className={nunito.className}>
        <Link href="/">
          <h1 className="sr-only">Woovi</h1>
          <Image
            src={Logo}
            alt="Logo Woovi"
            className="mx-auto my-8 mt-[36px] h-[36px] w-[123px]"
          />
        </Link>
        {children}
        <div className="my-10 flex items-center justify-center gap-1">
          <SecureShildIcon />{' '}
          <p className="font-medium text-textLight">
            {' '}
            Pagamento 100% seguro via:
          </p>{' '}
          <LogoBlackAndWhite />{' '}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
