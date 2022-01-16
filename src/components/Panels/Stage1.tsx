import React, { useContext } from 'react'

import { Header } from '../Header'
import { WizardContext } from '../Wizard/components/wizard'

import 'src/styles/stage.scss'
import { childProps } from '../../App'

export default function Stage1(props: childProps) {
  const context = useContext(WizardContext)
  return (
    <div>
      <Header
        heading='Welcome! First things first...'
        description='You can always change them later.'
      />
      <div className='input-wrapper'>
        <div className='text-input-with-label'>
          <label htmlFor='full-name'>Full Name</label>
          <input
            type='text'
            className='stage-input'
            id='full-name'
            placeholder='Steve Jobs'
          />
        </div>
        <div className='text-input-with-label'>
          <label htmlFor='display-name'>Display Name</label>
          <input
            type='text'
            className='stage-input'
            id='display-name'
            placeholder='Steve'
          />
        </div>
        <button
          className='create-workspace-button'
          onClick={() => context.next()}
        >
          Create Workspace
        </button>
      </div>
    </div>
  )
}
