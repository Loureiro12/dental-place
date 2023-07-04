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
          <Button
            href="https://api.whatsapp.com/send?phone=5531993191047&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20:)"
            target="_blank"
          >
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
