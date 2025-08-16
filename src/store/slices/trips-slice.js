import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { TripsApi } from '../../services/api-services/api-invokes'

function buildTripSearchParams(searchForm, offset = 0, limit = 50, startLocation = '') {
  const { destination, startDate, persona, participants, duration, budget, categories, sortBy, ...rest } = searchForm || {}

  const DURATION_MAP = {
    'weekend': { min: 2, max: 3 },
    'week': { min: 4, max: 7 },
    'extended': { min: 8, max: 99 },
    'flexible dates': { min: 1, max: 99 },
  }

  let minDuration, maxDuration
  if (typeof duration === 'string') {
    const dKey = duration.trim().toLowerCase()
    if (DURATION_MAP[dKey]) {
      minDuration = Number(DURATION_MAP[dKey].min)
      maxDuration = Number(DURATION_MAP[dKey].max)
    }
  } else if (typeof duration === 'object' && duration !== null) {
    minDuration = Number(duration.min)
    maxDuration = Number(duration.max)
  } else if (duration) {
    minDuration = maxDuration = Number(duration)
  }

  const SORT_BY_MAP = {
    'budget-low': 'budgetLowToHigh',
    'budget-high': 'budgetHighToLow',
    'duration-short': 'durationShortest',
    'duration-long': 'durationLongest',
    'group-small': 'groupSizeSmallest',
    'group-large': 'groupSizeLargest',
    'dates-soon': 'datesSoonest',
    'recommended': 'recommended',
  }

  const mappedSortBy = sortBy && SORT_BY_MAP[sortBy] ? SORT_BY_MAP[sortBy] : sortBy

  const params = [
    { key: 'destination', value: destination },
    { key: 'date', value: startDate },
    { key: 'persona', value: persona && typeof persona === 'object' && persona.id ? persona.id : persona },
    { key: 'minTotalMember', value: participants?.min },
    { key: 'maxTotalMember', value: participants?.max },
    ...(Number.isFinite(minDuration) ? [{ key: 'minDuration', value: minDuration }] : []),
    ...(Number.isFinite(maxDuration) ? [{ key: 'maxDuration', value: maxDuration }] : []),
    { key: 'minBudget', value: budget?.min },
    { key: 'maxBudget', value: budget?.max },
    { key: 'preferences', value: categories && categories.length ? JSON.stringify(categories) : undefined },
    { key: 'sortBy', value: mappedSortBy },
    { key: 'offset', value: offset },
    { key: 'limit', value: limit },
    { key: 'startLocation', value: startLocation || '' },
  ].filter((item) => item.value !== undefined && item.value !== null && item.value !== '')

  return params
}

export const getTrips = createAsyncThunk(
  'trips/getTrips',
  async ({ searchForm, offset = 0, limit = 50, append = false, isShowMore = false, startLocation }, { rejectWithValue }) => {
    const params = buildTripSearchParams(searchForm, offset, limit, startLocation)
    try {
      let res = await TripsApi.getTrips(params)
      if (!isShowMore && !res.data?.trips?.length) {
        res = await TripsApi.getTrips([
          { key: 'destination', value: '' },
          { key: 'date', value: '' },
          { key: 'offset', value: 0 },
          { key: 'limit', value: 50 },
        ])
      }
      return { trips: res.data.trips, append }
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          toast.error('Invalid User!', { autoClose: 1500 })
        } else if (e.response.status === 404) {
          // 404 could mean "no trips found"; returning empty result
          return { trips: [], append }
        }
      }
      return rejectWithValue(e)
    }
  },
)

export const getTripsByStartLocation = createAsyncThunk(
  'trips/getTripsByStartLocation',
  async ({ searchForm, offset = 0, limit = 50, append = false, isShowMore = false, startLocation }, { rejectWithValue }) => {
    const { destination, startDate } = searchForm
    const params = [
      { key: 'destination', value: destination },
      { key: 'date', value: startDate },
      { key: 'offset', value: offset },
      { key: 'limit', value: limit },
      { key: 'startLocation', value: startLocation || '' },
    ]
    try {
      let res = await TripsApi.getTrips(params)
      if (!isShowMore && !res.data?.trips?.length) {
        res = await TripsApi.getTrips([
          { key: 'destination', value: '' },
          { key: 'date', value: '' },
          { key: 'offset', value: 0 },
          { key: 'limit', value: 50 },
        ])
      }
      return { trips: res.data.trips, append }
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          toast.error('Invalid User!', { autoClose: 1500 })
        } else if (e.response.status === 404) {
          return { trips: [], append }
        }
      }
      return rejectWithValue(e)
    }
  },
)

export const getRandomTrips = createAsyncThunk(
  'trips/getRandomTrips',
  async ({ searchForm, offset = 0, limit = 50, append = false }, { rejectWithValue }) => {
    const { destination, startDate } = searchForm
    const params = [
      { key: 'destination', value: destination },
      { key: 'date', value: startDate },
      { key: 'offset', value: offset },
      { key: 'limit', value: limit },
    ]
    try {
      const res = await TripsApi.fetchRandomTrips(params)
      return { trips: res.data.trips, append }
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          toast.error('Invalid User!', { autoClose: 1500 })
        } else if (e.response.status === 404) {
          return { trips: [], append }
        }
      }
      return rejectWithValue(e)
    }
  },
)

export const getTripById = createAsyncThunk('trips/getTripById', async (tripId, { rejectWithValue }) => {
  try {
    const res = await TripsApi.getTripById(tripId)
    return res.data?.[0]
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const getUserTrips = createAsyncThunk('trips/getUserTrips', async (_, { rejectWithValue }) => {
  try {
    const res = await TripsApi.getUserTrips()
    return res.data
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const getUserWishlist = createAsyncThunk('trips/getUserWishlist', async (_, { rejectWithValue }) => {
  try {
    const res = await TripsApi.getUserWishlistTrips()
    return res.data
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const getUserRequested = createAsyncThunk('trips/getUserRequested', async (_, { rejectWithValue }) => {
  try {
    const res = await TripsApi.getUserRequestedTrips()
    return res.data
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const getUserPastTrips = createAsyncThunk('trips/getUserPastTrips', async (_, { rejectWithValue }) => {
  try {
    const res = await TripsApi.getUserPastTrips()
    return res.data
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const addWishlistTrip = createAsyncThunk('trips/addWishlistTrip', async (tripId, { rejectWithValue }) => {
  try {
    const res = await TripsApi.addWishlistTrip(tripId)
    toast.success('Trip added to wishlist!')
    return res.data
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response.status === 404) {
        toast.error('Trip not found!', { autoClose: 1500 })
      }
    }
    return rejectWithValue(e)
  }
})

export const removeWishlistTrip = createAsyncThunk('trips/removeWishlistTrip', async (tripId, { rejectWithValue }) => {
  try {
    await TripsApi.removeWishlistTrip(tripId)
    toast.success('Trip removed from wishlist!')
    return tripId
  } catch (e) {
    toast.error('Failed to remove trip from wishlist. Please try again.')
    return rejectWithValue(e)
  }
})

export const requestJoinTrip = createAsyncThunk('trips/requestJoinTrip', async ({ tripId, hostId }, { rejectWithValue }) => {
  try {
    const res = await TripsApi.requestJoinTrip(tripId, hostId)
    toast.success('Join request sent!')
    return res.data
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response.status === 404) {
        toast.error('Trip not found!', { autoClose: 1500 })
      } else {
        toast.error('Failed to request join trip.')
      }
    }
    return rejectWithValue(e)
  }
})

export const leaveTrip = createAsyncThunk('trips/leaveTrip', async ({ tripId, hostId }, { rejectWithValue }) => {
  try {
    await TripsApi.leaveTrip(tripId, hostId)
    toast.success('Left trip successfully!')
    return tripId
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response.status === 404) {
        toast.error('Trip not found!', { autoClose: 1500 })
      } else {
        toast.error('Failed to leave trip.')
      }
    }
    return rejectWithValue(e)
  }
})

export const createTrip = createAsyncThunk('trips/createTrip', async ({ tripData, isMultiMedia = false }, { rejectWithValue }) => {
  try {
    const res = await TripsApi.createTrip(tripData, isMultiMedia)
    return res
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const createTripsImages = createAsyncThunk(
  'trips/createTripsImages',
  async ({ tripData, isMultiMedia = true }, { rejectWithValue }) => {
    try {
      await TripsApi.createTripsImages(tripData, isMultiMedia)
      return true
    } catch (e) {
      if (e.response && e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      }
      return rejectWithValue(e)
    }
  },
)

export const editTripImages = createAsyncThunk('trips/editTripImages', async ({ tripData, payload, isMultiMedia }, { rejectWithValue }) => {
  try {
    await TripsApi.editTripImages(tripData, payload, isMultiMedia)
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const editTrip = createAsyncThunk('trips/editTrip', async ({ trip_id, tripData, isMultiMedia = false }, { rejectWithValue }) => {
  try {
    const res = await TripsApi.editTrip(tripData, trip_id, isMultiMedia)
    return res.data
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response.status === 403) {
        toast.error("You don't have access to edit this trip!", { autoClose: 1500 })
      } else if (e.response.status === 404) {
        toast.error("The trip doesn't exist!", { autoClose: 1500 })
      }
    }
    return rejectWithValue(e)
  }
})

export const deleteUserTrip = createAsyncThunk('trips/deleteUserTrip', async (trip_id, { rejectWithValue }) => {
  try {
    await TripsApi.deleteUserTrip(trip_id)
    toast.success('Trip successfully deleted!', { autoClose: 1500 })
    return trip_id
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const deleteBaseTrip = createAsyncThunk('trips/deleteBaseTrip', async (trip_id, { rejectWithValue }) => {
  try {
    await TripsApi.deleteBaseTrip(trip_id)
    toast.success('Trip successfully deleted!', { autoClose: 1500 })
    return trip_id
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return rejectWithValue(e)
  }
})

export const getRequestedMembers = createAsyncThunk('trips/getRequestedMembers', async (tripId, { rejectWithValue }) => {
  try {
    const res = await TripsApi.getRequestedMembers(tripId)
    return res.data
  } catch (e) {
    toast.error('Failed to fetch requested members.')
    return rejectWithValue(e)
  }
})

export const addMemberTrip = createAsyncThunk('trips/addMemberTrip', async ({ tripInstanceId, memberId }, { rejectWithValue }) => {
  try {
    await TripsApi.addMemberTrip({ tripInstanceId, memberId })
    toast.success('Member added to trip successfully!')
    return { tripInstanceId, memberId }
  } catch (e) {
    toast.error('Failed to add member to trip.')
    return rejectWithValue(e)
  }
})

export const removeMemberAsHost = createAsyncThunk(
  'trips/removeMemberAsHost',
  async ({ tripInstanceId, memberId }, { rejectWithValue }) => {
    try {
      await TripsApi.removeMemberAsHost({ tripInstanceId, memberId })
      toast.success('Member removed from trip successfully!')
      return { tripInstanceId, memberId }
    } catch (e) {
      toast.error('Failed to remove member from trip.')
      return rejectWithValue(e)
    }
  },
)

export const declineRequest = createAsyncThunk('trips/declineRequest', async ({ tripInstanceId, memberId }, { rejectWithValue }) => {
  try {
    await TripsApi.declineRequest({ tripInstanceId, memberId })
    toast.success('Request declined successfully!')
    return { tripInstanceId, memberId }
  } catch (e) {
    toast.error('Failed to decline request from trip.')
    return rejectWithValue(e)
  }
})

export const generatePreSignedUrlForDestinationImages = createAsyncThunk(
  'trips/generatePreSignedUrlForDestinationImages',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await TripsApi.generatePreSignedUrlForDestinationImages(payload)
      return res.data
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)

const initialState = {
  trips: [],
  startLocationTrips: [],
  randomTrips: [],
  trip: null,
  loading: true,
  user: {
    trips: [],
  },
  userTrip: {
    trips: [],
  },
  error: {},
  searchForm: {
    destination: '',
    startDate: '',
  },
  wishlistTrips: {
    trips: [],
  },
  pastTrips: {
    trips: [],
  },
  requestedTrips: {
    trips: [],
  },
  requestedMembers: [],
  notifications: [],
}

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setSearchForm: (state, action) => {
      state.searchForm = {
        ...state.searchForm,
        ...action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrips.fulfilled, (state, action) => {
        state.loading = false
        state.trips = action.payload.append ? [...(state.trips || []), ...(action.payload.trips || [])] : action.payload.trips
      })
      .addCase(getTripsByStartLocation.fulfilled, (state, action) => {
        state.loading = false
        state.startLocationTrips = action.payload.append
          ? [...(state.startLocationTrips || []), ...(action.payload.trips || [])]
          : action.payload.trips
      })
      .addCase(getRandomTrips.fulfilled, (state, action) => {
        state.loading = false
        state.randomTrips = action.payload.append ? [...(state.randomTrips || []), ...(action.payload.trips || [])] : action.payload.trips
      })
      .addCase(getTripById.fulfilled, (state, action) => {
        state.loading = false
        state.trip = action.payload
      })
      .addCase(getUserTrips.fulfilled, (state, action) => {
        state.loading = false
        state.userTrip = { trips: action.payload.trips }
      })
      .addCase(getUserPastTrips.fulfilled, (state, action) => {
        state.loading = false
        state.pastTrips = { trips: action.payload.trips }
      })
      .addCase(getUserWishlist.fulfilled, (state, action) => {
        state.loading = false
        state.wishlistTrips = { trips: action.payload.trips }
      })
      .addCase(getUserRequested.fulfilled, (state, action) => {
        state.loading = false
        state.requestedTrips = { trips: action.payload.trips }
      })
      .addCase(deleteUserTrip.fulfilled, (state, action) => {
        state.loading = false
        state.userTrip = {
          trips: state.userTrip.trips.filter((trip) => trip.tripInstanceId !== action.payload),
        }
      })
      .addCase(addWishlistTrip.fulfilled, (state, action) => {
        state.loading = false
        state.wishlistTrips = {
          trips: [...state.wishlistTrips.trips, action.payload],
        }
      })
      .addCase(removeWishlistTrip.fulfilled, (state, action) => {
        state.loading = false
        state.wishlistTrips = {
          trips: state.wishlistTrips.trips.filter((trip) => trip.tripInstanceId !== action.payload),
        }
      })
      .addCase(getRequestedMembers.fulfilled, (state, action) => {
        state.loading = false
        state.requestedMembers = action.payload.requestingMembers
      })
      .addCase(addMemberTrip.fulfilled, (state, action) => {
        state.loading = false
        state.trips = state.trips.map((trip) => {
          if (trip.tripInstanceId === action.payload.tripInstanceId) {
            return {
              ...trip,
              joinedMembers: [...trip.joinedMembers, action.payload.memberId],
              requestingMembers: trip.requestingMembers.filter((member) => member.userId !== action.payload.memberId),
            }
          }
          return trip
        })
      })
      .addCase(removeMemberAsHost.fulfilled, (state, action) => {
        state.loading = false
        if (state.trip && state.trip.joinedMembers) {
          state.trip = {
            ...state.trip,
            joinedMembers: state.trip.joinedMembers.filter((member) => member.id !== action.payload.memberId),
          }
        }
      })
      .addCase(declineRequest.fulfilled, (state, action) => {
        state.loading = false
        state.requestedMembers = state.requestedMembers.filter((member) => member.userId !== action.payload.memberId)
      })
      .addCase(editTrip.fulfilled, (state, action) => {
        state.loading = false
        state.trip = action.payload
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

export const { setSearchForm } = tripsSlice.actions

export default tripsSlice.reducer
