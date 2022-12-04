import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { SectionOne } from './components/SectionOne'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SectionOne />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
