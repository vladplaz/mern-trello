import React, {useEffect} from 'react'
import initStore from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import TrelloApp from './TrelloApp'
import {loginFromStore} from './actions'

const store = initStore()

function App() {

  useEffect(() => {
    window.addEventListener('dblclick', (e) => false)
    store.dispatch(loginFromStore())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <TrelloApp/>
      </Router>
    </Provider>
  )
}

export default App