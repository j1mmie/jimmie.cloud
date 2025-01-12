import './App.scss'

import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Routes, Route } from 'react-router-dom'
import { NavBar} from './components/molecules/nav-bar/NavBar'
import { Grid } from './debug/Grid'
import { routes } from './Routes'
import { Terminalize } from './terminalize/Terminalize'
import { Background } from './layout/header/background/Background'
import { VerticalExpander } from './terminalize/VerticalExpander'

function App() {
  const routeElements = routes.map(route => {
    return (
      <Route key={route.id} path={route.path} Component={route.comp} />
    )
  })

  return (
    <VerticalExpander>
      <Grid className="main-content">
        <Background />
        <div className="even-ch-width">

          <Terminalize
            lineHeightPixels={24}
            linesPerSecond={60}
          >
            <Header />

            <NavBar width={80} center={true} spacing={2} items={routes} />

            <Routes>
              {routeElements}
            </Routes>
            <Footer />
          </Terminalize>
        </div>
      </Grid>
    </VerticalExpander>
  )
}

export default App
