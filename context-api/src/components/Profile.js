//useRef 연습

import React, { useState, useEffect, useRef } from 'react'

const Profile = () => {
  const [age, setAge] = useState(20)
  const prevAgeRef = useRef(20)

  console.log(prevAgeRef)
  useEffect(() => {
    prevAgeRef.current = age
  }, [age])

  const prevAge = prevAgeRef.current

  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger'
  console.log(age, prevAge)
  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const random = Math.floor(Math.random() * 50 + 1)
          setAge(random)
        }}
      >
        나이변경
      </button>
    </div>
  )
}

export default Profile
