import { Container } from './styles'

export interface titleProps {
  text?: string
  textColor: 'primary' | 'second'
}

export function Title({ text, textColor }: titleProps) {
  return (
    <Container textColor={textColor}>
      <h1>{text}</h1>
    </Container>
  )
}
