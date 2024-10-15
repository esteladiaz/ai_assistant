import { CopilotChat } from '@copilotkit/react-ui';
import React from 'react';

const SomeComponent = () => {
  return (
    <CopilotChat
      instructions={"You are assisting the user as best as you can. Ansewr in the best way possible given the data you have."}
      labels={{
        title: "Your Assistant",
        initial: "Hi! 👋 How can I assist you today?",
      }}
    />
  )
}

export default SomeComponent