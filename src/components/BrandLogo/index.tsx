import React from 'react'
import 'src/styles/brandlogo.scss'
import Icon from '../../static/icon.png'

export default function BrandLogo() {
  return (
    <div className='logo-wrapper'>
      <div className='logo-container'>
        <div className='align-logo'>
          <img src={Icon} alt='Eden' />
        </div>
        Eden
      </div>
    </div>
  )
}
