import React from 'react'
import { Header } from '../Header'

import 'src/styles/stage.scss'
import { childProps } from '../../App'

export default function Stage4(props: childProps) {
  return (
    <div>
      <div className='success-circle-container'>
        <i className='fas fa-check-circle fa-4x success-circle'></i>
      </div>
      <Header
        heading={`Congratulations, Eren!`}
        description={`You have completed onboarding, you can start using Eden!`}
      />
      <div className='input-wrapper'>
        <button className='create-workspace-button'>Launch Eden</button>
      </div>
    </div>
  )
}
