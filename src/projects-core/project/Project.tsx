import React, { ReactNode } from 'react'
import './Project.scss'
import { SecretCode } from '../../layout/secret-code/SecretCode'

export interface ProjectProps {
  children:ReactNode[] | ReactNode
}

const Project:React.FC<ProjectProps> = ({children}) => {
  return (
    <div>
      <SecretCode width={80} />
      {children}
    </div>
  )
}

export default Project
