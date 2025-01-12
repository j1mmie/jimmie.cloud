import React from 'react'

export interface ProjectSubheaderProps {
  children:string
}

const ProjectSubheader:React.FC<ProjectSubheaderProps> = ({children}) => {
  return <h4>{children}</h4>
}

export default ProjectSubheader
