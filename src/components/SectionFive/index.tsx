import LogoGroup from '../../assets/logoGroup.svg'
import WhatsApp from '../../assets/whatsapp.png'
import Instagram from '../../assets/instagram.png'

import { Container, Content, ContantButton, Button, ImgLogo } from './styles'

export function SectionFive() {
  return (
    <Container>
      <Content>
        <ImgLogo src={LogoGroup} alt="Logo da Dental Place" />

        <ContantButton>
          <Button href="https://wa.me/message/YV36TSQUTAVMF" target="_blank">
            <img src={WhatsApp} alt="WhatsApp" />
          </Button>

          <Button
            href="https://www.instagram.com/dentalplace.odonto/"
            target="_blank"
          >
            <img src={Instagram} alt="Instagram" />
          </Button>
        </ContantButton>
      </Content>
    </Container>
  )
}
