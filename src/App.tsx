import './App.scss'

import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Routes, Route } from 'react-router-dom'
import { NavBar} from './components/molecules/nav-bar/NavBar'
import { Grid } from './debug/Grid'
import { routes } from './Routes'
import { Terminalize } from './terminalize/Terminalize'


function App() {
  const routeElements = routes.map(route => {
    return (
      <Route key={route.id} path={route.path} Component={route.comp} />
    )
  })

  return (
    <Terminalize speedInLinesPerSecond={100}>
      <Grid className="main-content">
        <Header />

        <NavBar width={80} center={true} spacing={2} items={routes} />
        <br />

        <Routes>
          {routeElements}
        </Routes>
        <Footer />
      </Grid>
    </Terminalize>
  )
}

export default App
