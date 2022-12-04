import React from 'react'
import Logo from '../../assets/logo.svg'

import { Container, Content } from './styles'

export interface LayoutProps {
  children: React.ReactNode
  backgroundColor: 'primary' | 'second' | 'tertiary'
  logo?: boolean
}

export function Layout({ children, backgroundColor, logo }: LayoutProps) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Content backgroundColor={backgroundColor}>
        {children}
        {logo && <img src={Logo} alt="Logo Dental Place" />}
      </Content>
    </Container>
  )
}
