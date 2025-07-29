import { getAuthToken } from '@src/stores/authHelpers'
import axios from './axiosInstance'

const ENDPOINT = '/default/mentacare-backend'

export const callingAPI = <Res, Req>(request_type: string, data: Req): Promise<Res> => {
  return axios
    .post(`${ENDPOINT}`, {
      request_type,
      ...data,
      jwt_token: getAuthToken() || ''
    })
    .then((res) => {
      return res.data
    })
}
