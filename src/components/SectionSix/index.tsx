import { Layout } from '../Layout'
import { Title } from '../Title'

import DentFlex from '../../assets/brands/dentflex.svg'
import Golgran from '../../assets/brands/golgran.svg'
import Maquira from '../../assets/brands/maquira.svg'
import PolarFix from '../../assets/brands/polarFix.svg'
import Voco from '../../assets/brands/voco.svg'

import { Container, ContentSectionOne, ContentImg } from './styles'
import { Header } from '../SectionThree/styles'

export function SectionSix() {
  return (
    <Container>
      <Layout backgroundColor="second">
        <ContentSectionOne>
          <Header>
            <Title text="Marcas que trabalhamos" textColor="primary" />
          </Header>
          <ContentImg>
            <img src={DentFlex} alt="DentFlex" />
            <img src={Golgran} alt="Golgran" />
            <img src={Maquira} alt="Maquira" />
            <img src={PolarFix} alt="PolarFix" />
            <img src={Voco} alt="Voco" />
          </ContentImg>
        </ContentSectionOne>
      </Layout>
    </Container>
  )
}
