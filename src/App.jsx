import { useState } from 'react'
import './App.css'
import {store} from './store/store'
import { Provider } from 'react-redux'
import WeatherTestComponent from './WeatherTestComponent'

function App() {

  return (
    <>
      <Provider store={store}>

      </Provider>
      app
    </>
  )
}

export default App
