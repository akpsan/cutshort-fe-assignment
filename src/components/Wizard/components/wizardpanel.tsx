import React from 'react'
import { Stepper } from './stepper'

import 'src/styles/wizardpanel.scss'

interface IWizardPanelProps {
  children?: React.ReactNode
}

export default function WizardPanel(props: IWizardPanelProps) {
  return (
    <div className='wizard-panel'>
      <Stepper />
      {props.children}
    </div>
  )
}
