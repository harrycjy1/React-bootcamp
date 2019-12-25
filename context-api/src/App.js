import React from 'react'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'
import Profile from './components/Profile'
import { SampleProvider } from './contexts/sample'
import './App.css'

function App() {
  return (
    <SampleProvider>
      <div className="panes">
        <LeftPane />
        <RightPane />
        <Profile />
      </div>
    </SampleProvider>
  )
}

export default App
