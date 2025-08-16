import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer)
  const { element } = props
  return isAuthenticated ? element : <Navigate to="/login" />
}

export default PrivateRoute
