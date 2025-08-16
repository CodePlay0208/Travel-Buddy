import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ProfileApi } from '../../services/api-services/api-invokes'
import { setAuthToken, setAuthTokenImg } from '../../services/api-services/api-services'
import { toast } from 'react-toastify'

export const getProfile = createAsyncThunk('profile/getProfile', async (_, { rejectWithValue }) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.getUserProfile()
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const getOtherUserProfile = createAsyncThunk('profile/getOtherUserProfile', async (userId, { rejectWithValue }) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.getOtherUserProfile(userId)
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({ profileData, isMultiMedia = false }, { rejectWithValue }) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
      if (isMultiMedia) {
        setAuthTokenImg(localStorage.token)
      }
    }
    try {
      const res = await ProfileApi.editUserProfile(profileData, isMultiMedia)
      return res.data
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)

export const deleteProfile = createAsyncThunk('profile/deleteProfile', async (_, { rejectWithValue }) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.deleteUserProfile()
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const generatePreSignedUrlForProfilePic = createAsyncThunk(
  'profile/generatePreSignedUrlForProfilePic',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await ProfileApi.generatePreSignedUrlForProfilePic(payload)
      return res.data
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)

const initialState = {
  profile: null,
  otherProfile: null,
  loading: true,
  error: {},
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileLogout: (state) => {
      state.profile = null
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(getOtherUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.otherProfile = action.payload
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = null
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false
          state.error = action.payload
        },
      )
      .addDefaultCase((state) => state)
  },
})

export const { profileLogout } = profileSlice.actions

export default profileSlice.reducer
