import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details to an error tracking service or console
    console.error('ErrorBoundary caught an error:', error)
    console.error('Component stack:', errorInfo.componentStack)
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error is caught
      return <h1>Something went wrong. Please try again later.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
