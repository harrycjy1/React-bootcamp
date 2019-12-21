import React, { useState, useEffect } from 'react'
import { SampleConsumer } from '../contexts/sample'

const Sends = props => {
  const [input, setInput] = useState('')

  useEffect(() => {
    setInput(props.value)
  }, [props])

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.setValue(input)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input vlaue={input} onChange={handleChange} />
      <button type="submit">설정</button>
    </form>
  )
}

const SendsContainer = () => {
  return (
    <SampleConsumer>
      {({ state, action }) => <Sends value={state} setValue={action}></Sends>}
    </SampleConsumer>
  )
}

export default SendsContainer
