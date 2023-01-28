import React from 'react'
import './App.css'

import Greeting from './components/Greeting'

export const userContext = React.createContext()

const App = () => (
  <userContext.Provider value={{name: 'Rahul'}}>
    <Greeting />
  </userContext.Provider>
)

export default App
