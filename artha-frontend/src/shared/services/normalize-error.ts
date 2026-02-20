import axios from 'axios'

export type ApiError = {
  message: string
  status?: number
  details?: unknown
}

export function normalizeApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message ?? error.message,
      status: error.response?.status,
      details: error.response?.data,
    }
  }

  if (error instanceof Error) {
    return { message: error.message }
  }

  return { message: 'Unknown error' }
}
