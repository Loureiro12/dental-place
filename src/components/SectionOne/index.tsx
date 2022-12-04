import { Layout } from '../Layout'
import { Title } from '../Title'

import { Container, ContentSectionOne } from './styles'

export function SectionOne() {
  return (
    <Container>
      <Layout backgroundColor="primary">
        <ContentSectionOne>
          <Title text="Vivemos para inovar" textColor="second" />
          <p style={{ marginTop: 30 }}>
            A dental place nasce com o propósito de facilitar a vida dos
            estudantes de odontologia, dentistas e protéticos.
          </p>
          <p>
            Juntos vamos contribuir com o mercado odontológico inovando a rotina
            das pessoas com empenho e dedicação.
          </p>
        </ContentSectionOne>
      </Layout>
    </Container>
  )
}
