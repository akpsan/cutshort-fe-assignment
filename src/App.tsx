import React, { useState } from 'react'
import './App.css'
import BrandLogo from './components/BrandLogo'
import Stage1 from './components/Panels/Stage1'
import Stage2 from './components/Panels/Stage2'
import Stage3 from './components/Panels/Stage3'
import Stage4 from './components/Panels/Stage4'
import { Wizard, WizardPanel } from './components/Wizard'

export type childProps = {
  mode: string
  setMode: React.Dispatch<React.SetStateAction<string>>
  givenName: string
  setGivenName: React.Dispatch<React.SetStateAction<string>>
  displayName: string
  setDisplayName: React.Dispatch<React.SetStateAction<string>>
  workspaceName: string
  setWorkspaceName: React.Dispatch<React.SetStateAction<string>>
  workspaceURL: string
  setWorkspaceURL: React.Dispatch<React.SetStateAction<string>>
}

const getStage = (index: number, childProps: childProps) => {
  switch (index) {
    case 0:
      return <Stage1 {...childProps} />
    case 1:
      return <Stage2 {...childProps} />
    case 2:
      return <Stage3 {...childProps} />
    case 3:
      return <Stage4 {...childProps} />
    default:
      return <Stage1 {...childProps} />
  }
}

function App() {
  const [mode, setMode] = useState('single')
  const [givenName, setGivenName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [workspaceName, setWorkspaceName] = useState('')
  const [workspaceURL, setWorkspaceURL] = useState('')

  const childProps = {
    mode,
    setMode,
    givenName,
    setGivenName,
    displayName,
    setDisplayName,
    workspaceName,
    setWorkspaceName,
    workspaceURL,
    setWorkspaceURL,
  }

  const max = Array.from(Array(4).keys())
  return (
    <div className='App'>
      <BrandLogo />
      <Wizard>
        {max.map((index) => (
          <WizardPanel key={index}>{getStage(index, childProps)}</WizardPanel>
        ))}
      </Wizard>
    </div>
  )
}

export default App
