import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { SectionFive } from './components/SectionFive'
import { SectionOne } from './components/SectionOne'
import { SectionThree } from './components/SectionThree'
import { SectionTwo } from './components/SectionTwo'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
