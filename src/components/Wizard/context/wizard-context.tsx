import React, { createContext, useEffect, useState } from 'react'

interface IWizardContext {
  currentStage: number
  next: () => void
  previous: () => void
}

interface WizardContextProviderProps {
  children: React.ReactNode
}

const inititalValue = {
  currentStage: 0,
  next: () => null,
  previous: () => null,
}

const WizardContext = createContext<IWizardContext>(inititalValue)

// Higher order component to manage the wizard states and provide fns to maniulate it
export const WizardContextProvider = (props: WizardContextProviderProps) => {
  const [currentIndex, setIndex] = useState<number>(0)

  useEffect(() => {
    console.log(currentIndex)
  }, [currentIndex])

  const getMaxIndex = () => {
    // Get maximum stages
    const count = React.Children.toArray(props.children).length
    console.log(React.Children.toArray(props.children))
    return count ? count - 1 : 0
  }

  const next = () => {
    // Helper fn to increment stage
    const maxIndex = getMaxIndex()
    const index = currentIndex >= maxIndex ? maxIndex : currentIndex + 1
    setIndex(index)
  }

  const previous = () => {
    // Helper fn to decrement stage
    const index = currentIndex <= 0 ? 0 : currentIndex - 1
    setIndex(index)
  }

  const contextValue = {
    currentStage: currentIndex,
    next,
    previous,
  }

  return (
    <WizardContext.Provider value={contextValue}>
      {props.children}
    </WizardContext.Provider>
  )
}
