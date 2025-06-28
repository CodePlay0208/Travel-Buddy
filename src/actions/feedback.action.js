import { toast } from 'react-toastify'
import axios from 'axios'

export const postFeedback = (payload) => async (dispatch) => {
  try {
    const res = await axios.post('/user/feedback', payload)
    return res.data
  } catch (error) {
    return null
  }
}
