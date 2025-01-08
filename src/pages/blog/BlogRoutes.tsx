import { Route, Routes } from 'react-router-dom'
import { BlogPage } from './BlogPage'
import { articleDefs } from './ArticleDefs'

export function BlogRoutes() {
  const articleRoutes = articleDefs.map(articleDef => {
    return (
      <Route key={articleDef.to} path={articleDef.to} Component={articleDef.comp} />
    )
  })

  return (
    <Routes>
      <Route path="/" Component={BlogPage} />
      {articleRoutes}
    </Routes>
  )
}

