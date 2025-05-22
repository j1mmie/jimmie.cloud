import React from 'react'
import './Centerer.scss'

type CentererProps = {
  children?: React.ReactNode | React.ReactNode[]
}

export const Centerer:React.FC<CentererProps> = ({ children }) => {
  return (
    <div className="centerer">
      <div className="centerer-margins">
        <div className="centerer-width">
          {children}
        </div>
      </div>
    </div>
  )
}
