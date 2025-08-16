import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LocationApi } from '../../services/api-services/api-invokes'

export const getLocationSuggestions = createAsyncThunk('location/getLocationSuggestions', async (inputLocation, { rejectWithValue }) => {
  try {
    const res = await LocationApi.getLocationByName(inputLocation)
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

const initialState = {
  suggestions: [],
  loading: true,
  error: null,
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocationSuggestions.fulfilled, (state, action) => {
        state.loading = false
        state.suggestions = action.payload
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

export default locationSlice.reducer
