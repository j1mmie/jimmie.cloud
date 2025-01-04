import './App.css'

import { Header } from './layout/header/Header'
import { Footer } from './layout/footer/Footer'
import CategoryNavigator from './project-browser/CategoryNavigator'
import { projectCategoryDefs } from './projects/ProjectCategoryDefs'

function App() {
  return (
    <div className="main-content">
      <Header />
      <CategoryNavigator projectCategoryDefs={projectCategoryDefs} />
      <Footer />
    </div>
  )
}

export default App
