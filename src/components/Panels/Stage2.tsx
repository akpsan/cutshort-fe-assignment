import React, { useContext } from 'react'

import { Header } from '../Header'
import { WizardContext } from '../Wizard/components/wizard'

import 'src/styles/stage.scss'
import { childProps } from '../../App'

export default function Stage2(props: childProps) {
  const context = useContext(WizardContext)
  return (
    <div>
      <Header
        heading={`Let's set up a home for all your work`}
        description='You can always create another workspace later.'
      />
      <div className='input-wrapper'>
        <div className='text-input-with-label'>
          <label htmlFor='workspace-name'>Workspace Name</label>
          <input
            type='text'
            className='stage-input'
            id='workspace-name'
            placeholder='Eden'
          />
        </div>
        <div className='text-input-with-label'>
          <label htmlFor='workspace-url'>
            Workspace URL
            <span className='label-hint'> (Optional)</span>
          </label>
          <div className='text-input-glued'>
            <input
              type='text'
              className='stage-input quarter'
              id='workspace-url'
              placeholder='www.eden.com/'
              disabled
            />
            <input
              type='text'
              className='stage-input threefourth'
              id='workspace-url'
              placeholder='Example'
            />
          </div>
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
