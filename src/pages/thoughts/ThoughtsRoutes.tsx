import { Route, Routes } from 'react-router'
import { articleDefs } from './ArticleDefs'
import { PageLoader } from '../../components/molecules/page-loader/PageLoader'
import Thoughts from './Thoughts'

export default function ThoughtsRoutes() {
  const articleRoutes = articleDefs.map(articleDef => {
    const articleLoader = (
      <PageLoader key={`article-route-loader-${articleDef.to}`}>
        <articleDef.lazyComp />
      </PageLoader>
    )

    return (
      <Route key={articleDef.to} path={articleDef.to} element={articleLoader} />
    )
  })

  return (
    <Routes>
      <Route path="/" Component={Thoughts} />
      {articleRoutes}
    </Routes>
  )
}

