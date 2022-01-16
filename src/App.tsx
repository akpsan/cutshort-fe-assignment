import React, { useEffect, useState } from 'react'
import './App.css'
import BrandLogo from './components/BrandLogo'
import Stage1 from './components/Panels/Stage1'
import Stage2 from './components/Panels/Stage2'
import Stage3 from './components/Panels/Stage3'
import Stage4 from './components/Panels/Stage4'
import { Wizard, WizardPanel } from './components/Wizard'

const getStage = (index: number) => {
  switch (index) {
    case 0:
      return <Stage1 />
    case 1:
      return <Stage2 />
    case 2:
      return <Stage3 />
    case 3:
      return <Stage4 />
    default:
      return <Stage1 />
  }
}

function App() {
  const max = Array.from(Array(4).keys())
  return (
    <div className='App'>
      <BrandLogo />
      <Wizard>
        {max.map((index) => (
          <WizardPanel key={index}>{getStage(index)}</WizardPanel>
        ))}
      </Wizard>
    </div>
  )
}

export default App
