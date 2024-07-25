import axios, { AxiosInstance } from 'axios'

class ApiService {
  static instance: ApiService
  axiosClient: AxiosInstance

  static getInstance = () => {
    return ApiService.instance
  }
}