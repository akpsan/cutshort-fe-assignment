import React, { useContext, useEffect, useState } from 'react'
import { default as cn } from 'classnames'

import { Header } from '../Header'
import { WizardContext } from '../Wizard/components/wizard'

import 'src/styles/stage.scss'

export default function Stage3(props: any) {
  const [mode, setMode] = useState('single')
  const context = useContext(WizardContext)

  useEffect(() => {
    // set mode initially
    context.setData({
      ...context.data,
      mode: mode,
    })
  }, [])

  useEffect(() => {
    // set mode on updates
    context.setData({
      ...context.data,
      mode: mode,
    })
  }, [mode])

  return (
    <div>
      <Header
        heading={`How are you planning to use Eden?`}
        description={`We'll streamline your setup experience accordingly.`}
      />
      <div className='input-wrapper'>
        <div className='button-group'>
          <div
            className={cn('button-group-button', {
              selected: mode === 'single',
            })}
            onClick={() => setMode('single')}
          >
            <i className='fas fa-user'></i>
            <div className='button-group-button-text'>
              <div className='button-group-button-text-heading'>For myself</div>
              <div className='button-group-button-text-desc'>
                Write better. Think more clearly. Stay organized
              </div>
            </div>
          </div>
          <div
            className={cn('button-group-button', { selected: mode === 'team' })}
            onClick={() => setMode('team')}
          >
            <i className='fas fa-users'></i>
            <div className='button-group-button-text'>
              <div className='button-group-button-text-heading'>
                With my team
              </div>
              <div className='button-group-button-text-desc'>
                Wikis, docs, tasks &#38; projects all in one place
              </div>
            </div>
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
