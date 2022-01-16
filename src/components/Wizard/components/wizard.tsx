import React, {
  createContext,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react'

// Types
interface WizardProps {
  children?: React.ReactNode
}

interface IWizardContext {
  currentStage: number
  maxIndex: number
  next: () => void
  previous: () => void
  jump: (index: number) => void
  data: Object
  setData: (data: Object) => void
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

const getMaxIndex = (children: React.ReactNode) => {
  // Get maximum stages
  const count = React.Children.toArray(children).length
  return count ? count - 1 : 0
}

const inititalValue = {
  currentStage: 0,
  maxIndex: 0,
  next: () => null,
  previous: () => null,
  jump: () => null,
  data: {},
  setData: () => null,
}

export const WizardContext = createContext<IWizardContext>(inititalValue)

export default function Wizard(props: WizardProps) {
  const [currentStage, setStage] = useState(0)
  const [data, setData] = useState({}) // we can use this store any common data required in all screens

  // Using refs to store these values since we dont want to recalculate
  // them on each render. Also we aren't dynamically adding or removing
  // children so memoizing the util functions is unnecessory.
  const childrenMap: MutableRefObject<IChidrenMap> = useRef(
    childrenToHash(props.children)
  )
  const maxIndex: MutableRefObject<number> = useRef(getMaxIndex(props.children))

  const next = () => {
    // Helper fn to increment stage
    const index =
      currentStage >= maxIndex.current ? maxIndex.current : currentStage + 1
    setStage(index)
  }

  const previous = () => {
    // Helper fn to decrement stage
    const index = currentStage <= 0 ? 0 : currentStage - 1
    setStage(index)
  }

  const jump = (index: number) => {
    // Helper fn for jumping to any valid stage
    0 <= index && index <= maxIndex.current && setStage(index)
  }

  const setDataWrapper = (data: Object) => {
    setData(data)
  }

  const contextValue = {
    currentStage,
    maxIndex: maxIndex.current,
    next,
    previous,
    jump,
    data,
    setData: setDataWrapper,
  }

  let pane = React.cloneElement(
    childrenMap.current[currentStage] as React.ReactElement<any>,
    {
      key: `step-${currentStage}`,
    }
  )

  return (
    <WizardContext.Provider value={contextValue}>{pane}</WizardContext.Provider>
  )
}
