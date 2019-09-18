import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'
import Hie from './Hie'
import * as serviceWorker from './serviceWorker'

const App = () => 
  <Provider store={store}>
    <Hie />
  </Provider>
  
ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
