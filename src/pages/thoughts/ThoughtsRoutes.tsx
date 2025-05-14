import { Route, Routes } from 'react-router-dom'
import { Thoughts } from './Thoughts'
import { articleDefs } from './ArticleDefs'
import { PageLoader } from '../../components/molecules/page-loader/PageLoader'

export default function ThoughtsRoutes() {
  const articleRoutes = articleDefs.map(articleDef => {
    const pageLoader = (
      <PageLoader>
        <articleDef.lazyComp />
      </PageLoader>
    )

    return (
      <Route key={articleDef.to} path={articleDef.to} element={pageLoader} />
    )
  })

  return (
    <Routes>
      <Route path="/" Component={Thoughts} />
      {articleRoutes}
    </Routes>
  )
}

