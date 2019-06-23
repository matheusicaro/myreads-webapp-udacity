import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// Import context provider
import { MyProvider } from './app/Context'

import Main from './app/Main'
import './index.scss'

const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>

        <Main />

      </BrowserRouter>
    </MyProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
