import React from 'react'

import { Container, Content } from './styles'

export interface LayoutProps {
  children: React.ReactNode
  backgroundColor: 'primary' | 'second' | 'tertiary'
}

export function Layout({ children, backgroundColor }: LayoutProps) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Content backgroundColor={backgroundColor}>{children}</Content>
    </Container>
  )
}
