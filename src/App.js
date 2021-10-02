import React from 'react'
import { Route } from 'react-router'
import './App.css'
import { Widget } from './Components/Widget/Widget'
import { CharacterModal } from './Components/CharacterModal/CharacterModal'

function App() {
  return (
    <div className="App">
      <Widget />
      <Route path="/characters/:id" component={CharacterModal} />
    </div>
  )
}

export default App
