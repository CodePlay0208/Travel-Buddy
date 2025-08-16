import './App.css'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import PrivateRoute from './utils/PrivateRoute/PrivateRoute'
import ErrorBoundary from './utils/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ErrorBoundary>
        <ScrollToTop />
        <Routes>
          {routes.map((route) => {
            if (route.isPrivate) {
              return <Route path={route.path} element={<PrivateRoute element={route.element} />} />
            }
            return <Route exact path={route.path} element={route.element} />
          })}
        </Routes>
      </ErrorBoundary>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App
