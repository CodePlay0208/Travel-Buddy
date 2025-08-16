import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import NotificationApi from '../../services/api-services/api-invokes/notification-api'

export const getNotifications = createAsyncThunk('notifications/getNotifications', async (_, { rejectWithValue }) => {
  try {
    const res = await NotificationApi.getNotifications()
    return res.data
  } catch (e) {
    toast.error('Failed to fetch notifications.')
    return rejectWithValue(e)
  }
})

export const deleteNotification = createAsyncThunk('notifications/deleteNotification', async (notificationId, { rejectWithValue }) => {
  try {
    await NotificationApi.deleteNotifications(notificationId)
    return notificationId
  } catch (e) {
    toast.error('Failed to delete notification.')
    return rejectWithValue(e)
  }
})

const initialState = {
  notifications: [],
  error: null,
  loading: true,
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.loading = false
        state.notifications = action.payload
        state.error = null
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.loading = false
        state.notifications = state.notifications.filter((notif) => notif.notificationId !== action.payload)
        state.error = null
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

export default notificationSlice.reducer
