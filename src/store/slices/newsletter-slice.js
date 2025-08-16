import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { NewsletterApi } from '../../services/api-services/api-invokes'

export const subscribeNewsletter = createAsyncThunk('newsletter/subscribeNewsletter', async (payload, { rejectWithValue }) => {
  try {
    const res = await NewsletterApi.newsLetterSubscribe(payload)
    return res
  } catch (e) {
    return rejectWithValue(e)
  }
})

const initialState = {
  isSubscribed: false,
  loading: true,
  error: {},
}

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.fulfilled, (state, action) => {
        state.loading = false
        state.isSubscribed = true
        state.error = {}
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
          state.isSubscribed = false
          state.error = action.payload
        },
      )
      .addDefaultCase((state) => state)
  },
})

export default newsletterSlice.reducer
