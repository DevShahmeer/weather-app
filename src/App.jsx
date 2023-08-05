import { useState } from 'react'
import './App.css'
import {store} from './store/store'
import { Provider } from 'react-redux'
import WeatherProvider from './providers/WeatherProvider';

function App() {

  return (
    <>
      <Provider store={store}>
        <WeatherProvider>
        </WeatherProvider>
      </Provider>
      app
    </>
  )
}

export default App
