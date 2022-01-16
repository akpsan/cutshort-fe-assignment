import React, { useContext, useEffect, useState } from 'react'

import { Header } from '../Header'
import { WizardContext } from '../Wizard/components/wizard'

import 'src/styles/stage.scss'

export default function Stage1() {
  const [givenName, setGivenName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const context = useContext(WizardContext)

  const changeHandlerGivenName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setGivenName(e.target.value)
  }

  const changeHandlerDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setDisplayName(e.target.value)
  }

  useEffect(() => {
    context.setData({
      ...context.data,
      givenName,
    })
  }, [givenName])

  useEffect(() => {
    context.setData({
      ...context.data,
      displayName,
    })
  }, [displayName])

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
            value={givenName}
            onChange={changeHandlerGivenName}
          />
        </div>
        <div className='text-input-with-label'>
          <label htmlFor='display-name'>Display Name</label>
          <input
            type='text'
            className='stage-input'
            id='display-name'
            placeholder='Steve'
            value={displayName}
            onChange={changeHandlerDisplayName}
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
