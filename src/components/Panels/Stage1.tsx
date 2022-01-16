import React, { useContext, useEffect, useState } from 'react'

import { Header } from '../Header'
import { WizardContext } from '../Wizard/components/wizard'

import 'src/styles/stage.scss'

export default function Stage1() {
  const context = useContext(WizardContext)
  const [givenName, setGivenName] = useState(
    context.data.givenName ? context.data.givenName : ''
  )
  const [displayName, setDisplayName] = useState(
    context.data.displayName ? context.data.displayName : ''
  )

  const changeHandlerGivenName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setGivenName(e.target.value)
  }

  const changeHandlerDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setDisplayName(e.target.value)
  }

  useEffect(() => {
    if (context.data.givenName !== givenName) {
      context.setData({
        ...context.data,
        givenName,
      })
    }
  }, [givenName, context])

  useEffect(() => {
    if (context.data.displayName !== displayName) {
      context.setData({
        ...context.data,
        displayName,
      })
    }
  }, [displayName, context])

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
