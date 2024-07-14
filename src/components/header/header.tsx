import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/../public/Logo.png'

const Header = () => {
  return (
    <Link href="/">
      <h1 className="sr-only">Woovi</h1>
      <Image
        src={Logo}
        alt="Logo Woovi"
        className="mx-auto my-8 mt-[36px] h-[36px] w-[123px]"
      />
    </Link>
  )
}

export default Header
