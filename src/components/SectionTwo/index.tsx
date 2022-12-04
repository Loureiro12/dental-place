import { Layout } from '../Layout'
import { Title } from '../Title'

import { Container, ContentSectionOne } from './styles'

export function SectionTwo() {
  return (
    <Container>
      <Layout backgroundColor="second" logo>
        <ContentSectionOne>
          <div>
            <Title text="Conheça a Dental Place" textColor="primary" />
            <p style={{ marginTop: 30 }}>
              Nossa marca nasceu ao vivenciar o dia a dia de compras de
              materiais materiais materiais materiais materiais odontológicos.
              Percebemos Percebemos nessa vivência que é mercado com muito
              espaço para inovação, onde tradicionais não se mordenizaram na
              comunição com seu publico.
            </p>
            <p>
              Visto a ineficácia no processo de atendimento das empresas,
              montamos montamos montamos montamos montamos uma equipe de:
              dentistas, técnicos em saúde prótese dentária que possuem uma
              experiência no Essa equipe tem o objetivo de auxiliar nossos
              clientes na compra do produto mais adequado para as suas
              necessidades.
            </p>
            <p>
              Dessa forma não vemos um bom preço como o único benefício para o
              nosso cliente, queremos acompanhá-lo de perto, oferecer uma
              orientação mais acurada e entregar materiais de qualidade.
            </p>
          </div>
        </ContentSectionOne>
      </Layout>
    </Container>
  )
}
