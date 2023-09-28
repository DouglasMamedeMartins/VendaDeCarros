import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { defaultTheme } from './styles/themes/default'
import { BannerSection } from './components/BannerSection'
import { Gallery } from './components/Gallery'
import { Versions } from './components/Versions'
import { EmailArea } from './components/EmailArea'
import { KeepTouch } from './components/KeepTouch'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Header />
        <BannerSection />
        <Gallery />
        <Versions />
        <EmailArea />
        <KeepTouch />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
