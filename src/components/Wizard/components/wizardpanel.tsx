import React, { useContext } from 'react'
import { WizardContext } from './wizard'

const Header = ({ heading }: { heading: string }) => {
  return <div>{heading}</div>
}

const Stepper = () => {
  const context = useContext(WizardContext)
  return (
    <>
      <div onClick={() => context.next()}>Next</div>
      <div onClick={() => context.previous()}>Prev</div>
    </>
  )
}

export default function Wizardpanel({ heading }: { heading: string }) {
  return (
    <div style={{ margin: '20px' }}>
      <Header heading={heading} />
      <Stepper />
    </div>
  )
}
