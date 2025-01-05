import { useState } from 'react'
import { NavBar } from '../components/molecules/nav-bar/NavBar'
import { HomePage } from './home/HomePage'
import { pageDefs } from './PageDefs'

export function PageNavigator() {
  const [currentPage, setCurrentPage] = useState('home')

  const onPageChange = (pageId:string) => {
    setCurrentPage(pageId)
  }

  const selectedPage = pageDefs.find(page => page.id === currentPage)

  const pageComp = selectedPage ? selectedPage.comp : HomePage

  return (
    <div>
      <NavBar width={80} center={true} spacing={2}
              items={pageDefs} onSelectionChange={onPageChange}
              initialSelection={currentPage}
      />

      <br />

      <div className="page-content">
        {pageComp()}
      </div>
    </div>
  )
}
