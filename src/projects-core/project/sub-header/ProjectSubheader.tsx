import React from 'react'

export interface ProjectSubheaderProps {
  children:string
}

const ProjectSubheader:React.FC<ProjectSubheaderProps> = ({children}) => {
  return <h5>{children}</h5>
}

export default ProjectSubheader
