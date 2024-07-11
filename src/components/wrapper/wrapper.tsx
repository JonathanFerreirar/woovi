import React from 'react'
import { Container, ContainerProps } from '@mui/material'

type WrapperProps = React.PropsWithChildren & ContainerProps

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <Container {...props} maxWidth="lg">
      {children}
    </Container>
  )
}

export default Wrapper
