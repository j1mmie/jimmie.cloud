import { NavTree } from '../../../components/molecules/nav-tree/NavTree'
import { articleDefs } from '../ArticleDefs'

export function ArticleList() {
  return (
    <NavTree items={articleDefs} />
  )
}