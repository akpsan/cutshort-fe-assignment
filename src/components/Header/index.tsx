import React from 'react'

import 'src/styles/header.scss'

interface IHeaderProps {
  heading?: string
  description?: string
}
export const Header = ({
  heading = 'Welcome! First things first...',
  description = 'You can always change them later.',
}: IHeaderProps) => {
  return (
    <div className='wizard-header-wrapper'>
      <div className='wizard-header-main-text'>{heading}</div>
      <div className='wizard-header-subtext'>{description}</div>
    </div>
  )
}
