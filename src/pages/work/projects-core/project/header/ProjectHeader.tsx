import React from 'react'

export interface ProjectHeaderProps {
  children:string
}

const ProjectHeader:React.FC<ProjectHeaderProps> = ({children}) => {
  return <h3>{children}</h3>
}

export default ProjectHeader
