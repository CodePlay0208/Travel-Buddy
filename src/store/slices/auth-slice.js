import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AuthApi, ProfileApi } from '../../services/api-services/api-invokes'
import { setAuthToken } from '../../services/api-services/api-services'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token)
    return decoded.exp * 1000 <= Date.now()
  } catch {
    return true
  }
}

export const isTokenValid = createAsyncThunk('auth/isTokenValid', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('token')
  if (!token || isTokenExpired(token)) {
    return rejectWithValue('Invalid or expired token')
  }
  return true
})

export const loadUser = createAsyncThunk('auth/loadUser', async (_, { rejectWithValue }) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.getUserProfile()
    return res.data
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Failed to load user')
  }
})

export const register = createAsyncThunk('auth/register', async (formData, { rejectWithValue }) => {
  try {
    const res = await AuthApi.registerUser(JSON.stringify(formData))
    toast.success('Registration Successful! OTP sent to your email.', { autoClose: 1500 })
    return res.data
  } catch (err) {
    if (err.response?.status === 400) {
      toast.error('User Already Exists!', { autoClose: 1500 })
    } else {
      toast.error('Sign-up Failed!', { autoClose: 1500 })
    }
    return rejectWithValue(err.response?.data || 'Registration failed')
  }
})

export const login = createAsyncThunk('auth/login', async (userKey, { rejectWithValue }) => {
  try {
    const res = await AuthApi.loginUser(JSON.stringify({ userKey }))
    toast.success('Login Successful! OTP sent to your email.', { autoClose: 1500 })
    return res.data
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Login failed')
  }
})

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async ({ userOtp, isSignUpRequest = false }, { rejectWithValue }) => {
  const userKey = localStorage.getItem('userKey')
  if (localStorage.token) setAuthToken(localStorage.token)

  try {
    const res = await AuthApi.verifyOTP(JSON.stringify({ userKey, userOtp, isSignUpRequest }))
    localStorage.setItem('token', res.data.token)
    toast.success('OTP Verified!', { autoClose: 1500 })
    return res.data
  } catch (err) {
    if (err.response?.status === 400) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(err.response?.data || 'OTP verification failed')
  }
})

export const resendOTP = createAsyncThunk('auth/resendOTP', async (isSignUpRequest = false, { rejectWithValue }) => {
  const userKey = localStorage.getItem('userKey')
  if (localStorage.token) setAuthToken(localStorage.token)

  try {
    await AuthApi.resendOtp(JSON.stringify({ userKey, isSignUpRequest }))
    toast.success('OTP Resent!', { autoClose: 1500 })
    return true
  } catch (err) {
    if (err.response?.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(err.response?.data || 'Failed to resend OTP')
  }
})

export const editSecondaryKey = createAsyncThunk('auth/editSecondaryKey', async (payload, { rejectWithValue }) => {
  try {
    await AuthApi.editSecondaryKey(payload)
    return true
  } catch (err) {
    if (err.response?.status === 400) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(false)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  setAuthToken('')
  localStorage.removeItem('token')
  return true
})

const initialState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  user: null,
  isAuthenticated: null,
  otpVerified: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(loadUser.rejected, (state) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.user = null
      })

      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token
        localStorage.setItem('token', action.payload.token)
        state.isAuthenticated = true
        state.otpVerified = false
      })
      .addCase(register.rejected, (state) => {
        state.isAuthenticated = false
      })

      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token
        localStorage.setItem('token', action.payload.token)
        state.isAuthenticated = true
        state.otpVerified = false
      })
      .addCase(login.rejected, (state) => {
        state.isAuthenticated = false
      })

      .addCase(verifyOTP.fulfilled, (state) => {
        state.otpVerified = true
      })
      .addCase(verifyOTP.rejected, (state) => {
        state.otpVerified = false
      })

      .addCase(resendOTP.rejected, (state) => {
        state.isAuthenticated = false
      })

      .addCase(logout.fulfilled, (state) => {
        state.token = null
        state.isAuthenticated = false
        state.user = null
        state.otpVerified = false
      })
  },
})

export default authSlice.reducer
