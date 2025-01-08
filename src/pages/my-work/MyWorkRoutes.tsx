import { Route, Routes } from 'react-router-dom'
import ProjectList from './project-list/ProjectList'
import { projectCategoryDefs } from './ProjectCategoryDefs'
import { MyWorkPage } from './MyWorkPage'

export function MyWorkRoutes() {
  const categoryRoutes = projectCategoryDefs.map(categoryDef => {
    const projectRoutes = categoryDef.projectDefs.map(projectDef => {
      return (
        <Route key={projectDef.to} path={projectDef.to} Component={projectDef.comp} />
      )
    })

    return (
      <Route key={categoryDef.to} path={categoryDef.to} element={<ProjectList categoryDef={categoryDef} />}>
        {projectRoutes}
      </Route>
    )
  })

  return (
    <Routes>
      <Route path="/" Component={MyWorkPage}>
        {categoryRoutes}
      </Route>
    </Routes>
  )
}
