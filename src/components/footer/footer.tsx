import React from 'react'

import { LogoBlackAndWhite, SecureShildIcon } from '../icon'

const Footer = () => {
  return (
    <div className="my-10 flex items-center justify-center gap-1">
      <SecureShildIcon />{' '}
      <p className="font-medium text-textLight"> Pagamento 100% seguro via:</p>{' '}
      <LogoBlackAndWhite />{' '}
    </div>
  )
}

export default Footer
