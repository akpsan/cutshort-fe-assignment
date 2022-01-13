import React from 'react'
import './App.css'
import { Wizard, WizardPanel } from './components/Wizard'

function App() {
  return (
    <div className='App'>
      <Wizard>
        <WizardPanel heading='One' />
        <WizardPanel heading='Two' />
        <WizardPanel heading='Three' />
        <WizardPanel heading='Four' />
        <WizardPanel heading='Five' />
      </Wizard>
    </div>
  )
}

export default App
