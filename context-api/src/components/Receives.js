import React, { useContext } from 'react'
import { Context } from '../contexts/sample'

const Receives = () => {
  const sample = useContext(Context)
  return <div>현재 설정된 값 : {sample.state}</div>
}

export default Receives
