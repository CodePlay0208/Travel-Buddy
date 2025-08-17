import './App.css'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
import PrivateRoute from './utils/PrivateRoute/PrivateRoute'
import ErrorBoundary from './utils/ErrorBoundary'
import AppInitializer from './utils/AppInitializer.jsx'
import ScrollToTop from './components/ScrollToTop'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <AppInitializer>
          <ScrollToTop />
          <Routes>
            {routes.map((route) => {
              if (route.isPrivate) {
                return <Route path={route.path} element={<PrivateRoute element={route.element} />} />
              }
              return <Route exact path={route.path} element={route.element} />
            })}
          </Routes>
        </AppInitializer>
      </ErrorBoundary>
    </Provider>
  )
}

export default App
