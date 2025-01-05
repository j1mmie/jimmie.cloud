import './App.scss'

// import { Header } from './layout/header/Header'
import { Footer } from './layout/footer/Footer'
import CategoryNavigator from './project-browser/CategoryNavigator'
import { projectCategoryDefs } from './projects/ProjectCategoryDefs'
import { Background } from './layout/background/Background'
import { SecretCode } from './layout/secret-code/SecretCode'
import { AnsiArt } from './layout/ansi-art/AnsiArt'

function App() {
  return (
    <div className="main-content">
      <Background />
      <AnsiArt />

      <h2>My Portfolio</h2>

      <SecretCode width={80} />
      <br />

      <CategoryNavigator projectCategoryDefs={projectCategoryDefs} />

      <br />
      <Footer />
    </div>
  )
}

export default App
