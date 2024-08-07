'use server'

import { API_PATH } from '@/constants/constants'
import { LoginResponse } from '../app/auth/login/types'

export async function login(prevState: any, formData: FormData) {
  const rawFormData = {
    password: formData.get('password'),
    email: formData.get('email'),
  }

  const response = await fetch(`${API_PATH}/api/auth/login`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(rawFormData),
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
