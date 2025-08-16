import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const postFeedback = createAsyncThunk('feedback/postFeedback', async (payload, { rejectWithValue }) => {
  try {
    const res = await axios.post('/user/feedback', payload)
    return res.data
  } catch (error) {
    toast.error('Failed to submit feedback.')
    return rejectWithValue(error)
  }
})

const initialState = {
  loading: false,
  error: null,
  success: false,
}

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postFeedback.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(postFeedback.fulfilled, (state) => {
        state.loading = false
        state.error = null
        state.success = true
      })
      .addCase(postFeedback.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })
      .addDefaultCase((state) => state)
  },
})

export default feedbackSlice.reducer
