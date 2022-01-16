import React, { useContext, useEffect, useState } from 'react'

import { Header } from '../Header'
import { WizardContext } from '../Wizard/components/wizard'

import 'src/styles/stage.scss'

export default function Stage2() {
  const context = useContext(WizardContext)
  const [workspace, setWorkspace] = useState(
    context.data.workspace ? context.data.workspace : ''
  )
  const [workspaceURL, setWorkspaceURL] = useState(
    context.data.workspaceURL ? context.data.workspaceURL : ''
  )

  const changeHandlerWorkspace = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setWorkspace(e.target.value)
  }

  const changeHandlerWorkspaceURL = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    setWorkspaceURL(e.target.value)
  }

  useEffect(() => {
    if (context.data.workspace !== workspace) {
      context.setData({
        ...context.data,
        workspace,
      })
    }
  }, [workspace, context])

  useEffect(() => {
    if (context.data.workspaceURL !== workspaceURL) {
      context.setData({
        ...context.data,
        workspaceURL,
      })
    }
  }, [workspaceURL, context])

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
            value={workspace}
            onChange={changeHandlerWorkspace}
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
              value={workspaceURL}
              onChange={changeHandlerWorkspaceURL}
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
