import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
})

const PrivateRoute = (props) => {
  const { element, isAuthenticated } = props
  return isAuthenticated ? element : <Navigate to="/login" />
}

export default connect(mapStateToProps)(PrivateRoute)
