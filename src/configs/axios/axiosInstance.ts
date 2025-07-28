// axios.js
import { useAuthStore } from '@src/stores/authStore'
import Axios from 'axios'

const axios = Axios.create({})

// const serverUrl = process.env.REACT_APP_SERVER_URL
export const baseURL = `https://tsc7n5hcee.execute-api.ap-southeast-1.amazonaws.com`

axios.defaults.timeout = 120000 // Milliseconds
axios.interceptors.request.use(
  async function (config) {
    const token = useAuthStore.getState().token

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    config.headers['Content-Type'] = 'application/json'
    config.baseURL = baseURL

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error?.response?.status === 403) {
      // Handle forbidden error
    }
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
    }
    throw error // Propagate the error
  }
)

export default axios
