import './globals.css'

import type { Metadata } from 'next'

import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

import { nunito } from './font'

export const metadata: Metadata = {
  title: 'Woovi',
  description:
    'Venda mais e encante seus clientes, Aceite Pix, Dê Cashback, Aplique descontos de forma inteligente',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="pt">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
