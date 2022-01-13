import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { WizardContextProvider } from '../context/wizard-context'
import Wizardpanel from './wizardpanel'

// Types
interface WizardProps {
  children?: React.ReactNode
}

interface IWizardContext {
  currentStage: number
  next: () => void
  previous: () => void
}

interface IChidrenMap {
  [key: string]: React.ReactNode
}

// Utilities
const childrenToHash = (children: React.ReactNode) => {
  const map: IChidrenMap = {}

  React.Children.toArray(children).forEach(
    (child: React.ReactNode, index: number) => {
      map[index] = child
    }
  )
  return map
}

const inititalValue = {
  currentStage: 0,
  next: () => null,
  previous: () => null,
}

export const WizardContext = createContext<IWizardContext>(inititalValue)

export default function Wizard(props: WizardProps) {
  const [currentStage, setStage] = useState(0)
  const [childrenMap, setMap] = useState(childrenToHash(props.children))

  console.log(childrenMap)

  const getMaxIndex = () => {
    // Get maximum stages
    const count = React.Children.toArray(props.children).length
    return count ? count - 1 : 0
  }

  const next = () => {
    // Helper fn to increment stage
    const maxIndex = getMaxIndex()
    const index = currentStage >= maxIndex ? maxIndex : currentStage + 1
    setStage(index)
  }

  const previous = () => {
    // Helper fn to decrement stage
    const index = currentStage <= 0 ? 0 : currentStage - 1
    setStage(index)
  }

  const contextValue = {
    currentStage,
    next,
    previous,
  }

  return (
    <WizardContext.Provider value={contextValue}>
      {childrenMap[currentStage]}
    </WizardContext.Provider>
  )
}
