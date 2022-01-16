import React from 'react'
import { useContext } from 'react'
import { default as cn } from 'classnames'
import { WizardContext } from './wizard'

import 'src/styles/stepper.scss'

export const Stepper = () => {
  const context = useContext(WizardContext)
  const placeHolders = Array.from(Array(context.maxIndex + 1).keys())

  return (
    <div className='stepper-wrapper'>
      <div className='stepper-items'>
        {placeHolders.map((value) => {
          return (
            <div
              className={cn('stepper-stage', {
                active: value <= context.currentStage,
              })}
              onClick={() => context.jump(value)}
              key={value}
            >
              {value + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}
