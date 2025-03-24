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
import { PageLoader } from './components/molecules/page-loader/PageLoader'

function App() {
  const routeElements = routes.map(route => {

    const pageLoader = (
      <PageLoader>
        <route.lazyComp />
      </PageLoader>
    )

    return (
      <Route key={route.id} path={route.path} element={pageLoader} />
    )
  })

  return (
    <VerticalExpander>
      <Grid className="main-content crt">
        <Background />
        <div className="even-ch-width">
          <Terminalize
            lineHeightPixels={24}
            linesPerSecond={32}
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
