import axios from 'axios'

import { env } from '@/core/config'
import { normalizeApiError } from '@/shared/services/normalize-error'

export const api = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(normalizeApiError(error)),
)

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeApiError(error)),
)
