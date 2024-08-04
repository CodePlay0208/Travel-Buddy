import './App.css'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {

  return (
    <Provider store={store}>
      <Routes>
        {routes.map((route) => (
          <Route exact path={route.path} element={route.element} />
        ))}
      </Routes>
    </Provider>
  )
}

export default App
