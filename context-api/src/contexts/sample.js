import React, { createContext, useState } from 'react'

const Context = createContext()

const { Provider, Consumer: SampleConsumer } = Context

const SampleProvider = props => {
  const [inputValue, setInputValue] = useState('기본값입니다')

  const something = {
    state: inputValue,
    action: value => {
      setInputValue(value)
    }
  }

  return <Provider value={something}>{props.children}</Provider>
}

export { SampleConsumer, SampleProvider }
