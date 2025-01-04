import React from 'react'

export interface ProjectHeaderProps {
  children:string
}

const ProjectHeader:React.FC<ProjectHeaderProps> = ({children}) => {
  return <h4>{children}</h4>
}

export default ProjectHeader
