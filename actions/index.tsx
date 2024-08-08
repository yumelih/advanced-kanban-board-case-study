'use server'

import { API_PATH } from '@/constants/constants'
import { LoginResponse } from './types'

const headers = {
  'Content-Type': 'application/json',
}

export const login = async (prevState: any, formData: FormData) => {
  const rawFormData = {
    password: formData.get('password'),
    email: formData.get('email'),
  }

  const response = await fetch(`${API_PATH}/api/auth/login`, {
    body: JSON.stringify(rawFormData),
    method: 'POST',
    headers,
  })

  const user: LoginResponse = await response.json()

  if (user.status && user.data.token) {
    return {
      message: 'success',
      user: user.data,
    }
  } else {
    return {
      message: 'failed',
      user: null,
    }
  }
}

export const getProfile = async (token: string) => {
  const response = await fetch(`${API_PATH}/api/auth/profile`, {
    headers: {
      ...headers,
      Authorization: token,
    },
  })

  const profile = await response.json()

  return profile
}
