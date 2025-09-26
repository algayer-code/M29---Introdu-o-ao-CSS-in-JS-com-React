import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import themeLight from './themes/light'
import themeDark from './themes/dark'

function App() {
  const [thisThemeDark, setThisThemeDark] = useState(false)

  function toggleTheme() {
    setThisThemeDark(!thisThemeDark)
  }

  return (
    <ThemeProvider theme={thisThemeDark ? themeDark : themeLight}>
      <GlobalStyle />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
