import './App.scss'

import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { PageNavigator } from './pages/PageNavigator'

function App() {
  return (
    <div className="main-content">
      <Header />
      <PageNavigator />
      <br />
      <Footer />
    </div>
  )
}

export default App
