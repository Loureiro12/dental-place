import { Container } from './styles'

interface titleProps {
  text: string
}

export function Title({ text }: titleProps) {
  return (
    <Container>
      <h1>{text}</h1>
    </Container>
  )
}
