import React, { useState, useEffect, useContext } from 'react'
import { SampleConsumer, Context } from '../contexts/sample'

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
  const sample = useContext(Context)
  console.log(sample)

  return <Sends value={sample.state} setValue={sample.action}></Sends>
}

export default SendsContainer
