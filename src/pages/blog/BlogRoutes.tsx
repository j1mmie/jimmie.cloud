import { Route, Routes } from 'react-router-dom'
import { Blog } from './Blog'
import { articleDefs } from './ArticleDefs'

export function BlogRoutes() {
  const articleRoutes = articleDefs.map(articleDef => {
    return (
      <Route key={articleDef.to} path={articleDef.to} Component={articleDef.comp} />
    )
  })

  return (
    <Routes>
      <Route path="/" Component={Blog} />
      {articleRoutes}
    </Routes>
  )
}

