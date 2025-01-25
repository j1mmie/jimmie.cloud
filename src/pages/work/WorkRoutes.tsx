import { Route, Routes } from 'react-router-dom'
import { projectCategoryDefs } from './ProjectCategoryDefs'
import { Work } from './Work'
import { PageLoader } from '../../components/molecules/page-loader/PageLoader'
import React from 'react'

const ProjectList = React.lazy(() => import('./project-list/ProjectList'))

export default function WorkRoutes() {
  const categoryRoutes = projectCategoryDefs.map(categoryDef => {
    const projectRoutes = categoryDef.projectDefs.map(projectDef => {
      if (!projectDef.lazyComp) {
        return undefined
      }

      const projectPageLoader = (
        <PageLoader>
          <projectDef.lazyComp />
        </PageLoader>
      )

      return (
        <Route key={projectDef.to ?? projectDef.title} path={projectDef.to} element={projectPageLoader} />
      )
    })

    const categoryPageLoader = (
      <PageLoader>
        <ProjectList categoryDef={categoryDef} />
      </PageLoader>
    )

    return (
      <Route key={categoryDef.to} path={categoryDef.to} element={categoryPageLoader}>
        {projectRoutes}
      </Route>
    )
  })

  return (
    <Routes>
      <Route path="/" Component={Work}>
        {categoryRoutes}
      </Route>
    </Routes>
  )
}
