import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
})

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? { element } : <Navigate to="/login" />
}

export default connect(mapStateToProps)(PrivateRoute)
