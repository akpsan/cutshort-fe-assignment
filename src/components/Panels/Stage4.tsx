import React, { useContext } from 'react'
import { Header } from '../Header'

import 'src/styles/stage.scss'
import { WizardContext } from '../Wizard/components/wizard'

export default function Stage4() {
  const context = useContext(WizardContext)

  const showAlert = () => {
    const choice: boolean = window.confirm(`${JSON.stringify(
      context.data,
      null,
      3
    )}

    Reset form?`)

    if (choice) {
      context.setData({})
      context.jump(0)
    }
  }
  return (
    <div>
      <div className='success-circle-container'>
        <i className='fas fa-check-circle fa-4x success-circle'></i>
      </div>
      <Header
        //@ts-expect-error TypeScript will cry. We don't want to hard code any types to data object since it
        // is designed to contain any kind of data.
        heading={`Congratulations, ${context.data.displayName}`}
        description={`You have completed onboarding, you can start using Eden!`}
      />
      <div className='input-wrapper'>
        <button className='create-workspace-button' onClick={showAlert}>
          Launch Eden
        </button>
      </div>
    </div>
  )
}
