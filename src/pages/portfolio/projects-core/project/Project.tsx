import React, { ReactNode } from 'react'
import './Project.scss'
import { Hr } from '../../../../components/atoms/hr/Hr'

export interface ProjectProps {
  children:ReactNode[] | ReactNode
}

const Project:React.FC<ProjectProps> = ({children}) => {
  return (
    <div>
      <Hr width={80} />
      {children}
    </div>
  )
}

export default Project
