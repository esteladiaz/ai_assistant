import { CopilotKit } from '@copilotkit/react-core'
import React from 'react'
import SomeComponent from './components/SomeComponent'


const App = () => {
  return (
    <CopilotKit runtimeUrl='/copilotkit'>
      <SomeComponent />
    </CopilotKit>
  )
}

export default App