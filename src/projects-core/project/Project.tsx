import React from 'react'
import './Project.css'

export interface ProjectProps {
  children:string
}

const Project:React.FC<ProjectProps> = ({children}) => {
  return (
    <div className="project">
      {children}
    </div>
  )
}

export default Project
