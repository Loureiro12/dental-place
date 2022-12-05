import { Crown, Desktop, Lightbulb, Users } from 'phosphor-react'
import {
  Container,
  Content,
  Header,
  Caption,
  Title,
  Option,
  ContainerOption,
  TitleOption,
  TextOption,
} from './styles'

export function SectionThree() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Nossos pilares</Title>
          <Caption>
            Trabalhamos com tecnologia e criatividade para se moldar como um
            empresa diferente
          </Caption>
        </Header>
        <ContainerOption>
          <Option>
            <Crown color="#1e2144" weight="fill" />
            <TitleOption>EXCELÊNCIA</TitleOption>
            <TextOption>
              Buscamos dar o máximo de nossas capacidades para oferecer
              exelência no atendimento, nos produtos e nas entregas.
            </TextOption>
          </Option>

          <Option>
            <Lightbulb color="#1e2144" weight="fill" />
            <TitleOption>AGILIDADE</TitleOption>
            <TextOption>
              Flexibilidade para resolver as necessidades de nossos clientes,
              procurando nos reinventar a partir de novas soluções
            </TextOption>
          </Option>

          <Option>
            <Desktop color="#1e2144" weight="fill" />
            <TitleOption>INOVAÇÃO</TitleOption>
            <TextOption>
              Modernizar nossos processos com tecnologia para entregar o melhor
              para os nossos clientes
            </TextOption>
          </Option>

          <Option>
            <Users color="#1e2144" weight="fill" />
            <TitleOption>PESSOAS</TitleOption>
            <TextOption>
              Uma empresa focada em relacionamento, com respeito, humildade,
              transparência e ética
            </TextOption>
          </Option>
        </ContainerOption>
      </Content>
    </Container>
  )
}
