import { useState } from 'react'
import './App.css'
import {store} from './store/store'
import { Provider } from 'react-redux'
import WeatherProvider from './providers/WeatherProvider';
import DashBoard from './components/DashBoard';

function App() {

  return (
    <>
      <Provider store={store}>
        <WeatherProvider>
          <DashBoard />
        </WeatherProvider>
      </Provider>
      app
    </>
  )
}

export default App
